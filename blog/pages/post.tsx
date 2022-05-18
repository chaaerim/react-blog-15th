import AppLayout from "../components/AppLayout";
import styled from "styled-components";

const Post = () => {
  return (
    <>
      <AppLayout>
        <div>글 작성하는 곳</div>
        <FromStyle action="">
          <input type="text" placeholder="글 제목" />
          <textarea name="" id="" placeholder="글 내용"></textarea>
          <button>글 작성</button>
        </FromStyle>
        <div>
          작성 누르면 다시 홈으로 이동하고 작성한 내용은 홈에 적용되어 있음.
        </div>
      </AppLayout>
    </>
  );
};

const FromStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;
export default Post;
