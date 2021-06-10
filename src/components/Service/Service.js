import Title from '../GlobalComponents/Title';
import Container from '../GlobalComponents/Container';
import ServiceCard from './ServiceCard';
import './Service.scss';

const Service = () => (
  <section className='service'>
    <Title
      titleText='WE WANT YOU TO EXPRESS YOURSELF'
      overlayTitle='SERVICES'
    />
    <Container>
      <ServiceCard serviceTitle='REFUND POLICY' />
      <ServiceCard serviceTitle='PREMIUM PACKAGING' />
      <ServiceCard serviceTitle='SUPERIOR QUALITY' />
    </Container>
  </section>
);

export default Service;
