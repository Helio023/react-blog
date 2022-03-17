import { Link } from 'react-router-dom';
const Post = ({ title, img, alt, link, close }) => {
  return (
    <div className='recent__post'>
      <img src={img} alt={alt} className='recent__post-img' />
      <div className='recent__post-text'>
        <Link to={`/${link}`} onClick={close}>
          <h4 className='recent__post-header'>{title}</h4>
        </Link>
      </div>
    </div>
  );
};

export default Post;
