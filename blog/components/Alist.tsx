import { postList } from '../store/recoil';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Link from 'next/link';

const Alist = () => {
  const posts = useRecoilValue(postList);
  return (
    <>
      {posts?.map((post) => {
        return (
          <Wrapper key={post.id}>
            <Link
              href={{
                pathname: `/get/${post.id}`,
                query: { currentPost: JSON.stringify(post) },
              }}
              as={`/get/${post.id}`}
            >
              <a>
                <h3>{post.title}</h3>
              </a>
            </Link>
            <DateDiv>{post.date}</DateDiv>
          </Wrapper>
        );
      })}
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 8fr 2fr;
  width: 90%;
  padding: 0 5px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px auto 10px auto;
  box-sizing: border-box;
`;
const DateDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Alist;
