import StyledCardContainer from './StyledComponents/StyledCardContainer';
import StyledCardTitle from './StyledComponents/StyledCardTitle';
import StyledStateDiv from './StyledComponents/StyledStateDiv';
import StyledImage from './StyledComponents/StyledImage';

export default function RoomCard({ children }) {
  return (
    <StyledCardContainer>
      <StyledCardTitle>{children}</StyledCardTitle>
      <StyledImage></StyledImage>
      <StyledStateDiv></StyledStateDiv>
    </StyledCardContainer>
  );
}
