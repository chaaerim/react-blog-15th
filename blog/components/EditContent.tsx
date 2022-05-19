import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Component, useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { postList, postNum } from '../store/recoil';
import moment from 'moment';
const EditContent = () => {
  const now = moment();
  const router = useRouter();
  const { id } = router.query;

  const [posts, setPosts] = useRecoilState(postList);
  const [prevPost] = posts.filter((post) => post.id === Number(id));

  const [title, setTitle] = useState(prevPost?.title);
  const [contents, setContents] = useState(prevPost?.contents);

  const onChangeTitleArea = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setTitle(e.target.value);
    },
    [title]
  );
  const onChangeTextArea = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setContents(e.target.value);
    },
    [contents]
  );

  const onSubmitEdit = useCallback(
    (e: React.SyntheticEvent): void => {
      e.preventDefault();
      const date = getDate();

      const obj = {
        id: Number(id),
        title,
        contents,
        date,
      };
      setPosts(posts.map((post) => (post.id === Number(id) ? obj : post)));
      setContents('');
      router.push('/');
    },
    [title, contents]
  );
  const getDate = () => {
    return now.format().slice(5, 10);
  };

  return (
    <>
      <FormStyle onSubmit={onSubmitEdit}>
        <input
          value={title}
          name="title"
          onChange={onChangeTitleArea}
          type="text"
        />
        <textarea value={contents} name="content" onChange={onChangeTextArea} />
        <button>수정</button>
      </FormStyle>
    </>
  );
};

export default EditContent;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`;
