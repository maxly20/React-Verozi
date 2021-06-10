import Title from '../GlobalComponents/Title';
import Container from '../GlobalComponents/Container';
import BlogCard from './BlogCard';
import BlogOne from '../../images/blogOne.jpg';
import BlogTwo from '../../images/blogTwo.jpg';
import BlogThree from '../../images/blogThree.jpg';

import './Blog.scss';

const Blog = () => (
  <section className='blog' id='blog'>
    <Title titleText='RECENT BLOG' overlayTitle='BLOG' />
    <Container>
      <BlogCard blogImg={BlogOne} />
      <BlogCard blogImg={BlogTwo} />
      <BlogCard blogImg={BlogThree} />
    </Container>
  </section>
);

export default Blog;
