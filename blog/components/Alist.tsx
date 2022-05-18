import { postList } from "../store/recoil";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Link from "next/link";
const Alist = () => {
  const [posts, _] = useRecoilState(postList);
  return (
    <>
      {posts.map((post, i) => {
        return (
          <Wrapper>
            <Link href="/get/:id">
              <a>
                <h3>{post.title}</h3>
              </a>
            </Link>
            <div>{post.date}</div>
          </Wrapper>
        );
      })}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  border: 1px solid red;
  margin: 10px auto 10px auto;
  justify-content: space-around;
`;

export default Alist;
