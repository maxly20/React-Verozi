import Container from '../GlobalComponents/Container';
import Title from '../GlobalComponents/Title';
import TrendingCard from '../Trending/TrendingCard';
import ProductSeven from '../../images/productSeven.jpg';
import ProductEight from '../../images/productEight.jpg';
import ProductNine from '../../images/productNine.jpg';
import ProductTen from '../../images/productTen.jpg';
import './Products.scss';

const Products = () => (
  <section className='products' id='shop'>
    <Title titleText='Products' overlayTitle='PRODUCTS' />
    <Container>
      <TrendingCard cartItem={true} price='$120' cardImg={ProductSeven} />
      <TrendingCard cartItem={true} price='$120' cardImg={ProductEight} />
      <TrendingCard cartItem={true} price='$120' cardImg={ProductNine} />
      <TrendingCard cartItem={true} price='$120' cardImg={ProductTen} />
    </Container>
  </section>
);

export default Products;
