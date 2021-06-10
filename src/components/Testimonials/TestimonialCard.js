import './Testimonials.scss';

const TestimonialCard = ({ userImg }) => (
  <div className='testimonialCard'>
    <div
      style={{ background: `url(${userImg}) no-repeat center/cover` }}
      className='userBg'
    >
      <div className='quote'>
        <i className='fas fa-quote-left fa-lg'></i>
      </div>
    </div>
    <p>
      A small river named Duden flows by their place and supplies it with the
      necessary regelialia. It is a paradisematic country, in which roasted
      parts of sentences fly into your mouth.
    </p>
    <h4>Roger Scott</h4>
    <span>Customer</span>
  </div>
);

export default TestimonialCard;
