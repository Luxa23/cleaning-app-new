import Nav from '../../components/Nav';
import StyledStateDiv from '../../components/StyledComponents/StyledStateDiv';
import StyledCardContainer from '../../components/StyledComponents/StyledCardContainer';
import Styledh3 from '../../components/StyledComponents/Styledh3';
import StyledTextBlock from '../../components/StyledComponents/StyledTextBlock';
import Styledh1 from '../../components/Styledh1';
import Select from '../../components/Select';

export default function IndividualRoomsPage() {
  return (
    <>
      <div>
        <Styledh1>Kitchen</Styledh1>
        <div>
          <StyledCardContainer>
            <Styledh3>Assignee:</Styledh3>
            <Select></Select>
          </StyledCardContainer>
          <StyledCardContainer>
            <Styledh3>Status:</Styledh3>
            <StyledStateDiv></StyledStateDiv>
          </StyledCardContainer>
          <StyledCardContainer>
            <Styledh3>Frequency: </Styledh3>
            <span>weekly</span>
          </StyledCardContainer>
        </div>

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
