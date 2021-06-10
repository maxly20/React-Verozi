import './Blog.scss';

const BlogCard = ({ blogImg }) => (
  <div className='blogCard'>
    <div className='blogImg'>
      <img src={blogImg} alt='blog' />
    </div>
    <div className='blogInfo'>
      <h2>
        Even the all-powerful Pointing has no control about the blind texts
      </h2>
      <div className='blogDesc'>
        <a href='#/'>Dec 6, 2018</a>
        <a href='#/'>Admin</a>
        <a href='#/'>
          <i className='far fa-comment-alt'></i>3
        </a>
      </div>
    </div>
  </div>
);

export default BlogCard;
