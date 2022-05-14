import styled from 'styled-components';
import Button from './Button';
import Link from 'next/link';

export default function Nav() {
  return (
    <StyledNav>
      <Button>
        <Link passHref href="/">
          <a>Rooms</a>
        </Link>
      </Button>

      <Button>
        <Link passHref href="/persons">
          <a>Flat Mates</a>
        </Link>
      </Button>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  color: chartreuse;
  background-color: black;
  position: fixed;
  bottom: 0px;
  width: 100vw;
`;
