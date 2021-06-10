import './Service.scss';

const ServiceCard = ({ serviceTitle }) => (
  <div className='serviceCard'>
    <div className='box'></div>
    <span>{serviceTitle}</span>
    <p>
      Even the all-powerful Pointing has no control about the blind texts it is
      an almost unorthographic.
    </p>
  </div>
);

export default ServiceCard;
