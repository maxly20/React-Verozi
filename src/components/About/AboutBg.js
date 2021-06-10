import './About.scss';

const AboutBg = ({ showModal, setShowModal }) => (
  <div className='aboutBg'>
    <div className='play' onClick={() => setShowModal(!showModal)}>
      <i className='fas fa-play fa-2x'></i>
    </div>
  </div>
);

export default AboutBg;
