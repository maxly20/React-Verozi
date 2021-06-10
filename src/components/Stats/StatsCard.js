import './Stats.scss';

const StatsCard = ({ statsNum, statsText }) => (
  <div className='statsCard'>
    <p>{statsNum}</p>
    <span>{statsText}</span>
  </div>
);

export default StatsCard;
