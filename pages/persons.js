import Nav from '../components/Nav';
import MateCard from '../components/MateCard';

export default function PersonsPage() {
  return (
    <>
      <div>
        <MateCard>Bob</MateCard>
        <MateCard>Alice</MateCard>
        <MateCard>Eve</MateCard>
      </div>

      <Nav></Nav>
    </>
  );
}
