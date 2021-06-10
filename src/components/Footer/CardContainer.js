import Container from '../GlobalComponents/Container';
import './Footer.scss';

const CardContainer = () => (
  <div className='cardContainer'>
    <Container>
      <div className='card one'>
        <h2>Verozi</h2>
        <div className='iconContainer'>
          <div className='icon'>
            <i className='fab fa-twitter fa-lg'></i>
          </div>
          <div className='icon'>
            <i className='fab fa-facebook-f fa-lg'></i>
          </div>
          <div className='icon'>
            <i className='fab fa-instagram fa-lg'></i>
          </div>
        </div>
      </div>
      <div className='card two'>
        <h2>MENU</h2>
        <a href='#/'>Shop</a>
        <a href='#/'>About</a>
        <a href='#/'>Journal</a>
        <a href='#/'>Contact Us</a>
      </div>
      <div className='card three'>
        <h2>HELP</h2>
        <div className='row'>
          <a href='#/'>Shipping Information</a>
        </div>
        <div className='row'>
          <a href='#/'>Returns & Exchange</a>
        </div>
        <div className='row'>
          <a href='#/'>Terms & Conditions</a>
        </div>
        <div className='row'>
          <a href='#/'>Privacy Policy</a>
        </div>
      </div>
      <div className='card four'>
        <h2>HAVE A QUESTIONS?</h2>
        <div className='row'>
          <i className='fas fa-map-marker-alt'></i>
          <p>
            999 Hope Street, <br /> Springvale, VIC 3174, Australia
          </p>
        </div>
        <div className='row'>
          <i className='fas fa-phone'></i>
          <a href='#/'> +61 09 999 999</a>
        </div>
        <div className='row'>
          <i className='fas fa-envelope'></i>
          <a href='#/'>info@verozi.com</a>
        </div>
      </div>
    </Container>
  </div>
);

export default CardContainer;
