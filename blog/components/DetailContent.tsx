import Link from 'next/link';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { postList } from '../store/recoil';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const DetailContent = () => {
  const [posts, setPosts] = useRecoilState(postList);
  const postId = Number(useRouter().query.id);

  const handlePostDelete = useCallback(
    (postId: number) => {
      setPosts(posts.filter((post: any) => post.id !== postId));
    },
    [posts]
  );
  console.log(posts);

  return (
    <ContentBox>
      <Content>
        <PostTitle> {posts[postId].title}</PostTitle>
        <PostContent>{posts[postId].content}</PostContent>
        <PostDate> {posts[postId].date}</PostDate>
      </Content>
      <Buttons>
        <Link href="/edit/3">
          <a>
            <button>수정</button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <button onClick={() => handlePostDelete(postId)}>삭제</button>
          </a>
        </Link>{' '}
      </Buttons>
    </ContentBox>
  );
};

export default DetailContent;

const ContentBox = styled.div`
  margin: auto;
  border: 0.08rem solid #c2bbbb;
  width: 30rem;
  height: 20rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.div``;
const PostContent = styled.div``;
const PostDate = styled.div``;
const Buttons = styled.div``;
