import StyledCardTitle from './StyledComponents/StyledCardTitle';
import StyledStateDiv from './StyledComponents/StyledStateDiv';
import StyledImage from './StyledComponents/StyledImage';
import StyledCard from './StyledComponents/StyledCard';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function RoomCard({ children, key }) {
  return (
    <Link
    // passHref
    // href={{ pathname: '/rooms/[roomId]', query: { roomId: { key } } }}
    >
      <a>
        <StyledCard>
          <StyledCardTitle>{children}</StyledCardTitle>
          <StyledImage></StyledImage>
          <StyledStateDiv></StyledStateDiv>
        </StyledCard>
      </a>
    </Link>
  );
}
