import StyledCardContainer from './StyledComponents/StyledCardContainer';
import StyledCardTitle from './StyledComponents/StyledCardTitle';
import StyledImage from './StyledComponents/StyledImage';

export default function MateCard({ children }) {
  return (
    <StyledCardContainer>
      <StyledCardTitle>{children}</StyledCardTitle>
      <StyledImage></StyledImage>
    </StyledCardContainer>
  );
}
