import Title from '../GlobalComponents/Title';
import Container from '../GlobalComponents/Container';
import './Subscribe.scss';

const Subscribe = () => (
  <section className='subscribe'>
    <Title titleText='SUBSCRIBE TO OUR NEWSLETTER' overlayTitle='Subscribe' />
    <Container>
      <div className='email'>
        <input type='email' placeholder='Enter email address' />
        <button>Subscribe</button>
      </div>
    </Container>
  </section>
);

export default Subscribe;
