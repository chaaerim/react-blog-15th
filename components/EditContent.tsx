import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { postList } from '../store/recoil';
import moment from 'moment';
import { FiEdit } from 'react-icons/fi';
import {
  FormStyle,
  StyledButton,
  TextInput,
  TitleInput,
} from '../styles/CommonStyle';

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
    (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      setContents(e.target.value);
    },
    [contents]
  );

  const onSubmitEdit = useCallback(
    (e: React.SyntheticEvent): void => {
      e.preventDefault();
      const date = getDate();
      if (title.length !== 0 && title.replace(/ /g, '').length !== 0) {
        const obj = {
          id: Number(id),
          title,
          contents,
          date,
        };
        setPosts(posts.map((post) => (post.id === Number(id) ? obj : post)));
        setContents('');
        router.push('/');
      } else {
        alert('제목을 입력해주세요.');
      }
    },
    [title, contents]
  );
  const getDate = () => {
    return now.format().slice(5, 10);
  };

  return (
    <FormStyle onSubmit={onSubmitEdit}>
      <>
        <TitleInput
          value={title}
          name="title"
          onChange={onChangeTitleArea}
          type="text"
        />
        <TextInput
          value={contents}
          name="content"
          onChange={onChangeTextArea}
        />
      </>
      <StyledButton>
        <FiEdit />
        수정
      </StyledButton>
    </FormStyle>
  );
};

export default EditContent;
