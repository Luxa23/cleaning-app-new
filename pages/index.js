import Nav from '../components/Nav';
import RoomCard from '../components/RoomCard';
import StyledCardContainer from '../components/StyledComponents/StyledCardContainer';

export default function Home() {
  return (
    <>
      <StyledCardContainer>
        <RoomCard key="kitchen">Kitchen</RoomCard>
        <RoomCard key="floor">Floor</RoomCard>
        <RoomCard key="bathroom">Bathroom</RoomCard>
      </StyledCardContainer>

      <Nav></Nav>
    </>
  );
}
