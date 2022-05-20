import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlinePencil } from 'react-icons/hi';
import React from 'react';

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
                  <HomeBtn>
                    <AiOutlineHome size={16} />
                    Home
                  </HomeBtn>
                </a>
              </Link>
              <Link href="/post">
                <PostBtn>
                  <HiOutlinePencil size={16} />
                  Post
                </PostBtn>
              </Link>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <HomeBtn>
                    <AiOutlineHome size={16} />
                    Home
                  </HomeBtn>
                </a>
              </Link>
              <Link href="/post">
                <PostBtn post>
                  {' '}
                  <HiOutlinePencil size={16} />
                  Post
                </PostBtn>
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
  padding: 1rem;
  overflow: scroll;
  width: 500px;
  height: 500px;
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
  padding-right: 1rem;
  font-size: 20px;
  border: none;
  background: none;
`;

const PostBtn = styled.button<{ post?: boolean }>`
  font-size: 20px;
  border: none;
  background: none;
  color: ${(props) => (props.post ? 'grey' : 'black')};
`;

export default React.memo(AppLayout);
