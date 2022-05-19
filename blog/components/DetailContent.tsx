import Link from 'next/link';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { postList } from '../store/recoil';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const DetailContent = () => {
  const [posts, setPosts] = useRecoilState(postList);
  const postId = Number(useRouter().query.id);
  const { currentPost } = useRouter().query;
  const post = JSON.parse(currentPost);

  const handlePostDelete = useCallback(() => {
    setPosts(posts.filter((post: any) => Number(post.id) !== postId));
  }, [posts]);

  return (
    <ContentBox>
      <Content>
        <PostTitle> {post.title}</PostTitle>
        <PostContent>{post.contents}</PostContent>
        <PostDate> {post.date}</PostDate>
      </Content>
      <Buttons>
        <Link
          href={{
            pathname: `/edit/${post.id}`,
            query: { currentPost: JSON.stringify(post) },
          }}
          as={`/edit/${post.id}`}
        >
          <a>
            <button>수정</button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <button onClick={handlePostDelete}>삭제</button>
          </a>
        </Link>{' '}
      </Buttons>
    </ContentBox>
  );
};

export default DetailContent;

const ContentBox = styled.div`
  border: 2px dotted red;
  margin: auto;
  border: 0.08rem solid #c2bbbb;
  width: 90%;
  height: 20rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

const PostTitle = styled.div``;
const PostContent = styled.div``;
const PostDate = styled.div``;
const Buttons = styled.div`
  display: flex;
`;
