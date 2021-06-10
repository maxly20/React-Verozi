import CardContainer from './CardContainer';
import './Footer.scss';

const Footer = () => (
  <footer className='footer' id='contact'>
    <CardContainer />
    <div className='copyright'>
      <p>
        Copyright &copy;2021 Verozi. All rights reserved 
      </p>
    </div>
  </footer>
);

export default Footer;
