import Nav from '../components/Nav';
import RoomCard from '../components/RoomCard';
import StyledCardContainer from '../components/StyledComponents/StyledCardContainer';
// use Router bekommt erst beim zweiten Rendern die Infos, die benötigt werden
import { useRouter } from 'next/router';

export default function Home() {
  const query = useRouter();
  console.log(query);

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
