import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Component } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { postList } from '../store/recoil';

const EditContent = () => {
  const [posts, setPosts] = useRecoilState(postList);
  const { textinput, handleInputChange, handleInputInitialize } = useInput('');
  const postId = Number(useRouter().query.id);
  const { currentPost } = useRouter().query;
  const post = JSON.parse(currentPost);

  const handlePostChange = (e: any) => {
    console.log(e.currentTarget.value);
    console.log(e.currentTarget.name);
    setPosts({ ...posts, [e.currentTarget.name]: e.target.value });
    console.log(posts);
  };
  console.log(posts[postId]?.content);

  return (
    <>
      <div>글 수정하는 곳</div>
      <FormStyle>
        <input
          onChange={handlePostChange}
          value={post.title}
          name="title"
          type="text"
        />
        <textarea
          onChange={handlePostChange}
          value={post.content}
          name="content"
          id=""
        />
        <Link href="/">
          <button>수정</button>
        </Link>
      </FormStyle>
      <div>
        수정 누르면 다시 홈으로 이동하고 수정한 내용은 홈에 적용되어 있음.
      </div>
    </>
  );
};

export default EditContent;

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;
