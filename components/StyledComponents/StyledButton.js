import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: hotpink;
  border-style: none;
  border-radius: 50px;
  margin: 0.6rem;
  padding: 0.6rem 0;

  & a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
    margin: 1rem;
    padding: 0.6rem 0.6rem;
  }
`;

export default StyledButton;
