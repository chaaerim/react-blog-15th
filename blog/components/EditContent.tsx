import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Component, useCallback, useState } from 'react';
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
  const [postNumber, setPostNumber] = useRecoilState(postNum);
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

  const onSubmitEdit = useCallback((e: React.SyntheticEvent): void => {
    e.preventDefault();
    const date = getDate();

    const obj = {
      id: Number(id),
      title,
      contents,
      date,
    };

    setPosts([...posts, obj]);
    setContents('');
    router.push('/');
  }, []);
  const getDate = () => {
    return now.format().slice(5, 10);
  };

  return (
    <>
      <div>글 수정하는 곳</div>
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
      <div>
        수정 누르면 다시 홈으로 이동하고 수정한 내용은 홈에 적용되어 있음.
      </div>
    </>
  );
};

export default EditContent;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;
