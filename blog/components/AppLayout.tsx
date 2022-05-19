import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

const AppLayout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <>
      <Container>
        <Navbar>
          {pathname === '/' ? (
            <>
              <Link href="/">
                <a>
                  <HomeBtn>홈</HomeBtn>
                </a>
              </Link>
              <Link href="/post">
                <PostBtn>글쓰기</PostBtn>
              </Link>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <HomeBtn>홈</HomeBtn>
                </a>
              </Link>
              <Link href="/post">
                <PostBtn post>글쓰기</PostBtn>
              </Link>
            </>
          )}
        </Navbar>
        {children}
      </Container>
    </>
  );
};

const Container = styled.div`
  overflow: scroll;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 15px 0px #000000;
  box-shadow: 5px 5px 15px 0px #000000;
`;
const Navbar = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
`;
const HomeBtn = styled.button`
  font-size: 20px;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const PostBtn = styled.button<{ post?: boolean }>`
  font-size: 20px;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    color: red;
  }
  color: ${(props) => (props.post ? 'red' : 'black')};
`;

export default AppLayout;
