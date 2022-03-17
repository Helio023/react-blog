import HomeDetails from './components/HomeDetails';
import HomePost from './components/HomePost';
import React, { useEffect, useState } from 'react';
import makeRequest from '../../utils/makeRequest';
import Pagination from '../components/pagination/Pagination';
import { useSelector } from 'react-redux';

const HomePosts = () => {
  const [posts, setPosts] = useState([]);
  const [postPagination, setPostPagination] = useState({});
  const [activePage, setActivePage] = useState(0);
  const page = activePage + 1;
  const term = useSelector((state) => state.display.searchTerm);
  console.log(term);

  useEffect(() => {
    const request = `/posts?populate=*&pagination[pageSize]=4&pagination[page]=${page}`;

    makeRequest.get(request).then((res) => setPosts(res.data.data));

    // For pagination
    makeRequest.get(request).then((res) => setPostPagination(res.data));
  }, [page]);

  const totalPages = postPagination?.meta?.pagination.pageCount;

  return (
    <div className='home-posts__wrapper'>
      <div className='home__posts'>
        {posts && <HomePost posts={posts} characters={400} />}
        {posts && (
          <Pagination
            totalPages={totalPages}
            activePage={activePage}
            onChange={(page) => setActivePage(page)}
          />
        )}
      </div>
      <div className='home__details'>
        <HomeDetails />
      </div>
    </div>
  );
};

export default HomePosts;
