// import HeroOverlay from './HeroOverlay';
import HeroInfo from './HeroInfo';
import Nav from './Nav/Nav';
import './Hero.scss';

const Hero = () => (
  <section className='hero' id='home'>
    {/* <HeroOverlay /> */}
    <Nav />
    <HeroInfo />
  </section>
);

export default Hero;
