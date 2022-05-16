import Nav from '../../components/Nav';
import StyledStateDiv from '../../components/StyledComponents/StyledStateDiv';
import StyledCardContainer from '../../components/StyledComponents/StyledCardContainer';
import Styledh3 from '../../components/StyledComponents/Styledh3';
import StyledTextBlock from '../../components/StyledComponents/StyledTextBlock';
import Styledh1 from '../../components/Styledh1';
import Select from '../../components/Select';
import StyledCard from '../../components/StyledComponents/StyledCard';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useStore from '../../hooks/useStore';

export default function IndividualRoomsPage() {
  const [value, setValue] = useState(false);
  // const room = rooms.find(room_ => room_.id === id);
  // const mates = useStore(state => state.mates);

  const rooms = useStore(state => state.rooms);

  const router = useRouter();
  const { roomId } = router.query;
  const currentRoom = rooms.find(room_ => room_.id === roomId);

  return (
    // wenn room vorhanden ist, returne room sonst nichts
    <>
      <div>
        <Styledh1>{currentRoom.name}</Styledh1>

        <StyledCardContainer>
          <StyledCard>
            <Styledh3>Assignee:</Styledh3>
            <Select
            //      onChange={event => chooseMate(room.id, event.target.value)}
            >
              {/* {mates.map(mate => {
                  return <option value={mate.id}>{mate.name}</option>;
                })} */}
            </Select>
          </StyledCard>
          <StyledCard>
            <Styledh3>Status:</Styledh3>
            <StyledStateDiv
              bool={value}
              type="button"
              onClick={() => {
                setValue(!value);
              }}
            ></StyledStateDiv>
          </StyledCard>
          <StyledCard>
            <Styledh3>Frequency: </Styledh3>
            <span>weekly</span>
          </StyledCard>
        </StyledCardContainer>

        <StyledTextBlock>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </StyledTextBlock>
      </div>
      <Nav></Nav>
    </>
  );
}
