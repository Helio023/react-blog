
import Home from './core/pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import RecentPosts from './core/components/recentPosts/RecentPosts';
import PostCategories from './core/pages/postCategories/PostCategories';
import { useSelector } from 'react-redux';
import PostDetails from './core/pages/postDetails/PostDetails';
import NotFound from './core/pages/notFound/NotFound';

const App = () => {
  const display = useSelector((state) => state.display.value);

  return (
    <>
      {display && <RecentPosts />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='categorias' element={<Home />} />
        <Route path='categorias/:id' element={<PostCategories />} />
        <Route path=':slug' element={<PostDetails />} />
        <Route path='about' element={<h1>About us</h1>} />
        <Route path='*'  element={<NotFound />}/>
      </Routes>
    </>
  );
};

export default App;
