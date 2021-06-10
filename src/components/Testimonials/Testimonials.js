import Slider from 'infinite-react-carousel';
import Container from '../GlobalComponents/Container';
import Title from '../GlobalComponents/Title';
import TestimonialCard from './TestimonialCard';
import PersonOne from '../../images/personOne.jpg';
import PersonTwo from '../../images/personTwo.jpg';
import PersonThree from '../../images/personThree.jpg';
import './Testimonials.scss';

const Testimonials = () => (
  <section className='testimonials'>
    <Title overlayTitle='TESTIMONY' />
    <Container>
      <Slider
        dots={true}
        slidesToShow={1}
        autoplayScroll={1}
        autoplay={true}
        autoplaySpeed='2200'
        arrows={false}
        className='slider'
      >
        <TestimonialCard userImg={PersonOne} />
        <TestimonialCard userImg={PersonTwo} />
        <TestimonialCard userImg={PersonThree} />
        <TestimonialCard userImg={PersonOne} />
        <TestimonialCard userImg={PersonOne} />
      </Slider>
    </Container>
  </section>
);

export default Testimonials;
