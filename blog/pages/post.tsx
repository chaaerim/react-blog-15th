import AppLayout from "../components/AppLayout";
import styled from "styled-components";

const Post = () => {
  return (
    <>
      <AppLayout>
        <div>글쓰는곳</div>
        <FromStyle action="">
          <input type="text" placeholder="제목" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="내용"
          ></textarea>
          <button>글쓰기</button>
        </FromStyle>
        <div>
          글쓰기 누르면 다시 홈으로 이동하고 쓴 글은 홈에 추가되어 있음.
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
