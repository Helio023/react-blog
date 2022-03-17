import { Close } from '@mui/icons-material';
import About from './About';
import Header from './Header';
import Post from './Post';
import PostLoader from './PostLoader';
import Social from './Social';
import { open } from '../../../redux/displayAnimation';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import makeRequest from '../../../../utils/makeRequest';

const Recent = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadersNum = [0, 1, 2, 3];
  const request =
    '/posts?fields=title,slug&populate=cover&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=4';

  useEffect(() => {
    setIsLoading(true);
    makeRequest
      .get(request)
      .then((res) => setPosts(res.data.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='recent'>
      <span className='recent__close'>
        <Close fontSize='large' onClick={() => dispatch(open(false))} />
      </span>

      <div className='recent__content'>
        <Header header='Mais recentes' />
        {isLoading
          ? loadersNum.map((loader) => <PostLoader key={loader} />)
          : posts.map((post) => (
              <Post
                key={post.id}
                img={post.attributes.cover.data.map(
                  (img) =>
                    `http://localhost:1337${img.attributes.formats.thumbnail.url}`
                )}
                title={post.attributes.title}
                link={post.attributes.slug}
                close={() => dispatch(open(false))}
              />
            ))}
      </div>

      <div className='recent__socials-wrapper'>
        <Social />
      </div>

      <div className='recent__about-wrapper'>
        <About />
      </div>
    </div>
  );
};

export default Recent;
