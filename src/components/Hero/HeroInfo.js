import './Hero.scss';

const HeroInfo = () => (
  <div className='heroInfo'>
    <h2>VEROZI</h2>
    <div className='heroDesc'>
      <span></span>
      <p>WEAR YOUR STYLE</p>
      <span></span>
    </div>
    <a href='#trending'>
      <div className='scroll'>
        <i className='fas fa-angle-down fa-2x'></i>
      </div>
    </a>
  </div>
);

export default HeroInfo;
