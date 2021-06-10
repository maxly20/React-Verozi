import Container from '../GlobalComponents/Container';
import AboutBg from './AboutBg';
import AboutInfo from './AboutInfo';
import './About.scss';

const About = ({ showModal, setShowModal }) => {
  return (
    <section className='about' id='about'>
      <Container>
        <AboutBg showModal={showModal} setShowModal={setShowModal} />
        <AboutInfo />
      </Container>
    </section>
  );
};

export default About;
