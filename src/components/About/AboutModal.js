import './About.scss';

const AboutModal = ({ showModal, setShowModal }) => (
  <div className={(showModal ? 'hidden' : '') + ' aboutModal'}>
    <div className='iframeContainer'>
      <iframe
        src='https://player.vimeo.com/video/216859022?autoplay=1'
        frameBorder='0'
        title='iframe'
      ></iframe>
      <i className='fas fa-times fa-lg' onClick={() => setShowModal(true)}></i>
    </div>
  </div>
);

export default AboutModal;
