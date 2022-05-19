import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { postList } from '../store/recoil';

const EditContent = () => {
  const [posts, setPosts] = useRecoilState(postList);
  const { textinput, handleInputChange, handleInputInitialize } = useInput('');
  const postId = Number(useRouter().query.id);

  const handlePostChange = (e: any) => {
    setPosts({ ...posts, [e.currentTarget.name]: e.currentTarget.value });
  };
  console.log(posts[postId]?.content);
  /* const handleInputSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      //공백이 아닐 때에만 send 가능
      if (textinput.replace(/\s+/g, '')) {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const post = {
          id: '0',
          title: 'momu-front-study',
          content: 'momu momu ',
          date: '05-17 ',
        };

        setPosts([...posts, post]);

        //공백일 경우 alert
      } else {
        alert('메세지를 입력하세요 ! ');
      }

      handleInputInitialize();

      //새로고침 방지
      e.preventDefault();
    },
    [posts, textinput]
  ); */

  return (
    <>
      <div>글 수정하는 곳</div>
      <FormStyle action="">
        <input
          onChange={handlePostChange}
          value={posts[postId].title}
          name="postTitle"
          type="text"
        />
        <textarea
          onChange={handlePostChange}
          value={posts[postId].content}
          name="postContent"
          id=""
        ></textarea>
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
