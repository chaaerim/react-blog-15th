import { postList } from '../store/recoil';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';

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
                query: {
                  currentPost: JSON.stringify(post),
                },
              }}
              as={`/get/${post.id}`}
            >
              <LinkToPost>{post.title}</LinkToPost>
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
  padding: 0 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin: 10px auto 10px auto;
  box-sizing: border-box;
  word-break: break-all;
`;
const DateDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #afaaaa;
`;

const LinkToPost = styled.a`
  padding: 0.5rem;
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  font-weight: lighter;
`;
export default Alist;
