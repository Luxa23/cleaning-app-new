import Nav from '../components/Nav';
import MateCard from '../components/MateCard';
import StyledCardContainer from '../components/StyledComponents/StyledCardContainer';

export default function PersonsPage() {
  return (
    <>
      <StyledCardContainer>
        <MateCard>Bob</MateCard>
        <MateCard>Alice</MateCard>
        <MateCard>Eve</MateCard>
      </StyledCardContainer>

      <Nav></Nav>
    </>
  );
}
