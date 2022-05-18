import AppLayout from "../../components/AppLayout";
import styled from "styled-components";

const Id = () => {
  return (
    <>
      <AppLayout>
        <div>글 수정하는 곳</div>
        <FormStyle action="">
          <input
            type="text"
            placeholder="수정하기 누른 글 제목 미리 깔아줘야 함."
          />
          <textarea
            name=""
            id=""
            placeholder="수정하기 누른 글 내용 미리 깔아줘야 함."
          ></textarea>
          <button>수정</button>
        </FormStyle>
        <div>
          수정 누르면 다시 홈으로 이동하고 수정한 내용은 홈에 적용되어 있음.
        </div>
      </AppLayout>
    </>
  );
};

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;
export default Id;
