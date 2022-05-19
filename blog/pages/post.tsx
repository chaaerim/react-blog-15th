import AppLayout from '../components/AppLayout';
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { postList, postNum } from '../store/recoil';
import moment from 'moment';

const Post = () => {
  const now = moment();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [posts, setPosts] = useRecoilState(postList);
  const [postNumber, setPostNumber] = useRecoilState(postNum);
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
  const handleForm = useCallback(
    (e: React.SyntheticEvent): void => {
      e.preventDefault();
      const date = getDate();

      const obj = {
        id: postNumber + 1,
        title,
        contents,
        date,
      };
      setPostNumber((prev) => prev + 1);
      setPosts([...posts, obj]);
      setContents('');
      router.push('/');
    },
    [contents, title]
  );
  const getDate = () => {
    return now.format().slice(5, 10);
  };

  return (
    <>
      <AppLayout>
        <FromStyle onSubmit={handleForm}>
          <input
            type="text"
            onChange={onChangeTitleArea}
            placeholder="글 제목"
            value={title}
          />
          <textarea
            onChange={onChangeTextArea}
            value={contents}
            id=""
            placeholder="글 내용"
          ></textarea>
          <button>글 작성</button>
        </FromStyle>
      </AppLayout>
    </>
  );
};

const FromStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`;
export default Post;
