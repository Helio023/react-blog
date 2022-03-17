import Header from './Header';

const About = () => {
  return (
    <div className='recent__about-wrapper'>
      <Header header='Sobre mim' />

      <div className='about'>
        <img
          src='https://i.ibb.co/YpZxPg4/FB-IMG-1645258418801.jpg'
          alt='Hélio Engrácia Mapupo'
          className='about__img'
        />

        <div className='about__description'>
          Desde o momento que escrevi o meu primeiro programa com "Hello World",
          senti que programar não era apenas uma habilidade para aprender mas sim
          um modo de vida a adoptar. A partir desse momento dedicaquei o meu tempo
          em aprender Desenvolvimento Web.
        </div>

        <a href='https://github.com/Helio023' target="_blank" rel='noreferrer' className='about__btn' >
          ler mais
        </a>
      </div>
    </div>
  );
};
export default About;
