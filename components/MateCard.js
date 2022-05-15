import StyledCardTitle from './StyledComponents/StyledCardTitle';
import StyledImage from './StyledComponents/StyledImage';
import StyledCard from './StyledComponents/StyledCard';

export default function MateCard({ children }) {
  return (
    <StyledCard>
      <StyledCardTitle>{children}</StyledCardTitle>
      <StyledImage></StyledImage>
    </StyledCard>
  );
}
