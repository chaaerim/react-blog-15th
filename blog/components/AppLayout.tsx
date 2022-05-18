import { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar>
        <Link href="/">
          <a>
            <button>홈</button>
          </a>
        </Link>
        <Link href="/post">
          <button>글쓰기</button>
        </Link>
        <Link href="/get/3">
          <button>실제로는 없는 버튼(게시글 상세보기)</button>
        </Link>
        <Link href="/edit/3">
          <button>실제로는 없는 버튼(수정하기)</button>
        </Link>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid blue;
`;
const Navbar = styled.div`
  display: flex;
`;

export default AppLayout;
