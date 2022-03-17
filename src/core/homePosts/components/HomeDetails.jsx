import About from './../../components/recentPosts/components/About';
import Social from './../../components/recentPosts/components/Social';
import Post from './../../components/recentPosts/components/Post';
import makeRequest from '../../../utils/makeRequest';
import { useEffect, useState } from 'react';
import Header from '../../components/recentPosts/components/Header';

const HomeDetails = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    makeRequest
      .get(
        '/posts?populate=*&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=4'
      )
      .then((res) => setPosts(res.data.data));
  }, []);

  return (
    <>
      <About />
      <Social />

      <div className='recent__content fix'>
        <Header header='Mais recentes' />
        {posts.map((post) => (
          <Post
            key={post.id}
            img={post.attributes.cover.data.map(
              (img) =>
                `http://localhost:1337${img.attributes.formats.thumbnail.url}`
            )}
            title={post.attributes.title}
            link={post.attributes.slug}
          />
        ))}
      </div>
    </>
  );
};

export default HomeDetails;
