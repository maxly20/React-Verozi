import { useState } from 'react';
import Slider from 'infinite-react-carousel';
import Container from '../GlobalComponents/Container';
import Title from '../GlobalComponents/Title';
import TrendingCard from './TrendingCard';
import ProductOne from '../../images/productOne.jpg';
import ProductTwo from '../../images/productTwo.jpg';
import ProductThree from '../../images/productThree.jpg';
import ProductFour from '../../images/productFour.jpg';
import ProductFive from '../../images/productFive.jpg';
import ProductSix from '../../images/productSix.jpg';
import './Trending.scss';

const Trending = () => {
  const [media, setMedia] = useState('');

  return (
    <section className='trending' id='trending'>
      <Title titleText='TRENDING' overlayTitle='Trending' />
      <Container>
        <Slider
          onResize={e => setMedia(e.target.innerWidth)}
          dots={true}
          slidesToShow={media < 750 ? 1 : media > 750 && media < 1360 ? 2 : 3}
          centerMode={media > 750 && media < 1360 ? true : false}
          centerPadding={media > 750 && media < 1360 ? 0 : 50}
          autoplayScroll={1}
          autoplay={true}
          autoplaySpeed={2200}
          arrows={false}
          className='slider'
        >
          <TrendingCard cardImg={ProductOne} price='$80' discount='$120' />
          <TrendingCard cardImg={ProductTwo} price='$120' />
          <TrendingCard cardImg={ProductThree} price='$120' />
          <TrendingCard cardImg={ProductFour} price='$80' discount='$120' />
          <TrendingCard cardImg={ProductFive} price='$120' />
          <TrendingCard cardImg={ProductSix} price='$80' discount='$120' />
        </Slider>
      </Container>
    </section>
  );
};

export default Trending;
