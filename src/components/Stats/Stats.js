import Container from '../GlobalComponents/Container';
import StatsCard from './StatsCard';
import './Stats.scss';

const Stats = () => (
  <section className='stats'>
    <Container>
      <StatsCard statsNum='10,000' statsText='Happy Customers' />
      <StatsCard statsNum='100' statsText='Branches' />
      <StatsCard statsNum='1,000' statsText='Partner' />
      <StatsCard statsNum='100' statsText='Awards' />
    </Container>
  </section>
);

export default Stats;
