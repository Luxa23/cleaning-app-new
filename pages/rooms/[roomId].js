import Nav from '../../components/Nav';
import StyledStateDiv from '../../components/StyledComponents/StyledStateDiv';
import StyledCardContainer from '../../components/StyledComponents/StyledCardContainer';
import Styledh3 from '../../components/StyledComponents/Styledh3';
import StyledTextBlock from '../../components/StyledComponents/StyledTextBlock';
import Styledh1 from '../../components/Styledh1';
import Select from '../../components/Select';
import StyledCard from '../../components/StyledComponents/StyledCard';
import { useState } from 'react';

export default function IndividualRoomsPage() {
  const [value, setValue] = useState(false);

  return (
    <>
      <div>
        <Styledh1>Kitchen</Styledh1>

        <StyledCardContainer>
          <StyledCard>
            <Styledh3>Assignee:</Styledh3>
            <Select></Select>
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
