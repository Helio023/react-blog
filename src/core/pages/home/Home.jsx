import AppLayout from '../../components/appLayout/AppLayout';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Carousel from '../../components/slider/Carousel';
import HomePosts from '../../homePosts/HomePosts';

const Home = () => {
   
  return (
    <>
      <Navbar />
      <AppLayout>
        <Carousel />
        <HomePosts />
      </AppLayout>
      <Footer />
    </>
  );
};

export default Home;
