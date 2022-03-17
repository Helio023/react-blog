import { useEffect, useState } from 'react';
import makeRequest from '../../../utils/makeRequest';
import AppLayout from '../../components/appLayout/AppLayout';
import Navbar from '../../components/navbar/Navbar';
import HomeDetails from '../../homePosts/components/HomeDetails';
import HomePost from '../../homePosts/components/HomePost';
import { useLocation } from 'react-router-dom';
import { CalendarToday } from '@mui/icons-material';
import { checkPostedPeriod } from '../../../utils/checkPostedPeriod';
import PostNotFound from '../../components/postNotFound/PostNotFound';
import Footer from '../../components/footer/Footer';

const PostDetails = () => {
  const [post, setPost] = useState([]);
  let [lastPosts, setLastPosts] = useState([]);
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  useEffect(() => {
    makeRequest(`/posts?populate=*&filters[slug][$eq]=${path}`).then((res) =>
      setPost(res.data.data)
    );

    makeRequest('/posts?populate=*&pagination[pageSize]=4').then((res) =>
      setLastPosts(res.data.data)
    );
  }, [path]);

  const slug = post.map((p) => p.attributes.slug);

  return (
    <>
      <Navbar />
      <AppLayout>
        <div className='home-posts__wrapper'>
          <div className='home__posts'>
            {slug[0] ? <HomePost posts={post} /> : <PostNotFound />}

            {slug[0] ? <div className='related-posts-container'>
              <h2 className='related-posts__title'>últimos posts</h2>
              <div className='related-posts'>
                {lastPosts.map((post) => (
                  <div className='post' key={post.id}>
                    <div className='post__img'>
                      <img
                        src={post.attributes.cover.data.map(
                          (img) =>
                            `http://localhost:1337${img.attributes.formats.thumbnail.url}`
                        )}
                        alt={post.attributes.cover.data.map(
                          (img) => img.attributes.formats.thumbnail.name
                        )}
                      />
                    </div>
                    <div className='post__text'>
                      <h3 className='post__title'>{post.attributes.title}</h3>
                      <div className='post__date'>
                        <CalendarToday />{' '}
                        <span>
                          {checkPostedPeriod(post.attributes.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> : ''}
          </div>
          {slug[0] ? <div className='home__details'>
            <HomeDetails />
          </div> : ''}
        </div>
      </AppLayout>
      {post && <Footer />}
    </>
  );
};

export default PostDetails;
