import Container from '../GlobalComponents/Container';
import Title from '../GlobalComponents/Title';
import TrendingCard from '../Trending/TrendingCard';
import ProductOne from '../../images/productOne.jpg';
import ProductTwo from '../../images/productTwo.jpg';
import ProductThree from '../../images/productThree.jpg';
import ProductFour from '../../images/productFour.jpg';
import './Products.scss';

const Products = () => (
  <section className='products' id='shop'>
    <Title titleText='Products' overlayTitle='PRODUCTS' />
    <Container>
      <TrendingCard cartItem={true} price='$120' cardImg={ProductOne} />
      <TrendingCard cartItem={true} price='$120' cardImg={ProductTwo} />
      <TrendingCard cartItem={true} price='$120' cardImg={ProductThree} />
      <TrendingCard cartItem={true} price='$120' cardImg={ProductFour} />
    </Container>
  </section>
);

export default Products;
