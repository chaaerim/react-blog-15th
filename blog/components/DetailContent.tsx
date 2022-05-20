import Link from 'next/link';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { postList } from '../store/recoil';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { FiEdit } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

const DetailContent = () => {
  const [posts, setPosts] = useRecoilState(postList);
  const postId = Number(useRouter().query.id);
  const { currentPost } = useRouter().query;

  let post;
  if (typeof currentPost === 'string') {
    post = JSON.parse(currentPost);
  }


  const handlePostDelete = useCallback(() => {
    setPosts(posts.filter((post) => Number(post?.id) !== postId));
  }, [posts]);

  return (
    <ContentBox>
      <Content>
        <PostTitle> {post?.title}</PostTitle>
        <PostContent>{post?.contents}</PostContent>
        <PostDate> 작성일 : {post?.date}</PostDate>
      </Content>
      <Buttons>
        <Link
          href={{
            pathname: `/edit/${post?.id}`,
            query: { currentPost: JSON.stringify(post) },
          }}
          as={`/edit/${post?.id}`}
        >
          <a>
            <button>
              <FiEdit />
              수정
            </button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <button onClick={handlePostDelete}>
              <FiTrash2 />
              삭제
            </button>
          </a>
        </Link>{' '}
      </Buttons>
    </ContentBox>
  );
};

export default DetailContent;

const ContentBox = styled.div`
  margin: auto;
  width: 90%;
  height: 26rem;
`;

const Content = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  border: 0.08rem solid #c2bbbb;
  border-radius: 1rem;
  height: 26rem;
`;

const PostTitle = styled.div`
  padding: 0.5rem;
  font-size: 1.5rem;
  border-bottom: 0.08rem solid #c2bbbb;
  font-weight: lighter;
  word-break: break-all;
`;
const PostContent = styled.div`
  white-space: pre-line;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: lighter;
  word-break: break-all;
  overflow: auto;
`;
const PostDate = styled.div`
  margin: auto 0.5rem 0 auto;
  color: #afaaaa;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.9rem;
`;
