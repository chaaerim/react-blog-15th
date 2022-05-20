import AppLayout from '../components/AppLayout';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { postList, postNum } from '../store/recoil';
import moment from 'moment';
import { HiOutlinePencil } from 'react-icons/hi';
import {
  FormStyle,
  StyledButton,
  TextInput,
  TitleInput,
} from '../styles/CommonStyle';

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

      if (title.length !== 0 && title.replace(/ /g, '').length !== 0) {
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
      } else {
        alert('제목을 입력해주세요.');
      }
    },
    [contents, title]
  );
  const getDate = () => {
    return now.format().slice(5, 10);
  };

  return (
    <>
      <AppLayout>
        <FormStyle onSubmit={handleForm}>
          <TitleInput
            type="text"
            onChange={onChangeTitleArea}
            placeholder="제목을 입력하세요 . . ."
            value={title}
            required
          />
          <TextInput
            onChange={onChangeTextArea}
            value={contents}
            id=""
            placeholder="내용을 입력하세요 . . ."
          />
          <StyledButton>
            <HiOutlinePencil />글 작성
          </StyledButton>
        </FormStyle>
      </AppLayout>
    </>
  );
};

export default Post;
