import './GlobalComponents.scss';

const Title = ({ titleText, overlayTitle }) => (
  <div className='title'>
    <h2>{overlayTitle}</h2>
    <h4>{titleText}</h4>
  </div>
);

export default Title;
