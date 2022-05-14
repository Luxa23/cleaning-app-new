import StyledCardContainer from './StyledComponents/StyledCardContainer';
import StyledCardTitle from './StyledComponents/StyledCardTitle';
import StyledDiv from './StyledComponents/StyledDiv';
import StyledImage from './StyledComponents/StyledImage';

export default function RoomCard({ children }) {
  return (
    <StyledCardContainer>
      <StyledCardTitle>{children}</StyledCardTitle>
      <StyledImage></StyledImage>
      <StyledDiv></StyledDiv>
    </StyledCardContainer>
  );
}
