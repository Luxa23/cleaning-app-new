import Nav from '../components/Nav';
import RoomCard from '../components/RoomCard';

export default function Home() {
  return (
    <>
      <div>
        <RoomCard>Kitchen</RoomCard>
        <RoomCard>Floor</RoomCard>
        <RoomCard>Bathroom</RoomCard>
      </div>

      <Nav></Nav>
    </>
  );
}
