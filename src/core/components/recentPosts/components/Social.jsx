import Header from './Header';
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material';

const Social = () => {
  return (
    <div className='recent__socials-wrapper'>
      <Header header='redes sociais' />

      <div className='socials'>
        <a
          href='https://www.facebook.com/cssdescomplicado'
          target='_blank'
          rel='noreferrer'
          className='socials__item'
        >
          <Facebook fontSize='large' />
        </a>
        <a
          href='https://www.github.com/helio023'
          target='_blank'
          rel='noreferrer'
          className='socials__item'
        >
          <GitHub fontSize='large' />
        </a>
        <a
          href='https://www.linkedin.com/in/h%C3%A9lio-engr%C3%A1cia-mapupo-8875561b9/'
          target='_blank'
          rel='noreferrer'
          className='socials__item'
        >
          <LinkedIn fontSize='large' />
        </a>
      </div>
    </div>
  );
};

export default Social;
