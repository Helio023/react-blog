import { CalendarTodayOutlined, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {checkPostedPeriod} from '../../../utils/checkPostedPeriod'

const HomePost = ({ posts, characters }) => {
  return (
    <>
      {posts.map((post) => (
        <div className='homepost' key={post.id}>
          <div className='homepost-category__wrapper'>
            {post.attributes.types.data.map((category) => (
              <p className='homepost__category' key={category.id}>
                {category.attributes.type}
              </p>
            ))}
          </div>
          {posts.length > 1 ? (
            <Link to={`/${post.attributes.slug}`}>
              <h2 className='homepost__title'>{post.attributes.title}</h2>
            </Link>
          ) : (
            <h2 className='homepost__title'>{post.attributes.title}</h2>
          )}
          <div className='homepost__details'>
            <p className='homepost__date'>
              <CalendarTodayOutlined className='homepost__icon' />
              {checkPostedPeriod(post.attributes.createdAt)}
            </p>
            <p className='homepost__author'>
              <Person className='homepost__icon' /> {post.attributes.author}
            </p>
          </div>
          <div className='homepost__img'>
            <img
              alt={post.attributes.cover.data.map((alt) => alt.attributes.name)}
              src={post.attributes.cover.data.map(
                (img) =>
                  `http://localhost:1337${img.attributes.formats.medium.url}`
              )}
            />
          </div>

          <div className='homepost__description'>
            {`${post.attributes.content.substring(0, characters)}...`}
          </div>
          {posts.length > 1 && (
            <Link to={`/${post.attributes.slug}`}>
              <button className='homepost__btn'>Ler mais</button>
            </Link>
          )}
        </div>
      ))}
    </>
  );
};

export default HomePost;
