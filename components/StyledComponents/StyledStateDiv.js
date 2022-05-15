import styled, { css } from 'styled-components';

const StyledStateDiv = styled.div`
  width: 30px;
  height: 30px;
  margin: 2rem;
  background-color: pink;
  border-radius: 99px;

  &:hover {
    color: blue;
  }

  ${({ bool = false }) => {
    return css`
      background-color: ${bool ? 'aquamarine' : 'pink'};
    `;
  }}
`;

export default StyledStateDiv;
