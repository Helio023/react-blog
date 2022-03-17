import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import makeRequest from '../../../utils/makeRequest';
import Navbar from '../../components/navbar/Navbar';
import HomePost from '../../homePosts/components/HomePost';
import AppLayout from '../../components/appLayout/AppLayout';
import Footer from '../../components/footer/Footer'

const PostCategories = () => {
  let [posts, setPosts] = useState([]);
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  useEffect(() => {
    makeRequest(`/posts?populate=*`).then((res) => setPosts(res.data.data));
  }, []);

  // Filter posts by category
  posts = posts.filter(
    (post) => post.attributes.types.data[0].attributes.type === category
  );

  return (
    <>
      <Navbar />
      <AppLayout>
        <div className='layout'>
          <h1 className='layout__category'>Categoria: {category}</h1>
          {posts && <HomePost posts={posts} characters={200} />}
        </div>
      </AppLayout>
      {posts && <Footer />}
    </>
  );
};

export default PostCategories;
