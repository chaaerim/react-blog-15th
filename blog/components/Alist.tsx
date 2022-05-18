import { postList } from "../store/recoil";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Link from "next/link";

const Alist = () => {
  const posts= useRecoilValue(postList);
  return (
    <>
      {posts.map((post, i) => {
        return (
          <Wrapper>
            <Link href={{
              pathname: `/get/${post.id}`,
              query: {post: JSON.stringify(post)}
              }}>
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
