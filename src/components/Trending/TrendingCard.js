import './Trending.scss';

const TrendingCard = ({ cardImg, price, discount, cartItem }) => {
  return (
    <div className='trendingCard'>
      <div className='trendingBg'>
        <img src={cardImg} alt='model' />
      </div>
      <div className='trendingDesc'>
        <a href='#/'>Verozi New Collection</a>
        <div className='trendingInfo'>
          <div className='trendingPrice'>
            {discount && <span>{discount}</span>}
            <p>{price}</p>
          </div>
          <div className='trendingRating'>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
          </div>
        </div>
      </div>
      {cartItem && (
        <div className='cartWrap'>
          <div className='cartInfo'>
            <a href='#/'>
              ADD TO CART
              <i className='fas fa-plus fa-sm'></i>
            </a>
          </div>
          <i className='far fa-heart'></i>
        </div>
      )}
    </div>
  );
};

export default TrendingCard;
