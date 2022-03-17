import { CalendarTodayOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { settings } from './settings';
import makeRequest from '../../../utils/makeRequest';
import { checkPostedPeriod } from '../../../utils/checkPostedPeriod';

const Carousel = () => {
  const [posts, setPosts] = useState([]);

  const request =
    '/posts?populate=*&pagination[page]&pagination[pageSize]=4&sort=publishedAt:desc';

  useEffect(() => {
    makeRequest.get(request).then((res) => setPosts(res.data.data));
  }, []);

  return (
    <>
      {posts && (
        <Slider className='slider' {...settings}>
          {posts.map((slide) => (
            <div className='slider__item-container' key={slide.id}>
              <div className='slider__item'>
                <div className='slider__img'>
                  <img
                    alt={slide.attributes.cover.data.map(
                      (alt) => alt.attributes.name
                    )}
                    src={slide.attributes.cover.data.map(
                      (img) =>
                        `http://localhost:1337${img.attributes.formats.medium.url}`
                    )}
                  />
                </div>

                <div className='slider__post'>
                  {slide.attributes.types.data.map((cat) => (
                    <p key={cat} className='post__category'>
                      {cat.attributes.type}
                    </p>
                  ))}
                  <Link to={`/${slide.attributes.slug}`}>
                    <h2 className='post__title'>{slide.attributes.title}</h2>
                  </Link>
                  <div className='post__date'>
                    <CalendarTodayOutlined />
                    <p>{checkPostedPeriod(slide.attributes.createdAt)}</p>
                  </div>

                  <Link to={`/${slide.attributes.slug}`}>
                    <p className='post__link'>Ler mais</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default Carousel;
