import AppLayout from "../../components/AppLayout";
import Link from "next/link";

const Get = () => {
  return (
    <>
      <AppLayout>
        <div>여기는 홈에서 게시글 누르면 get/:[id] 로 이동하는 곳</div>
        <div>실제로는 버튼 눌러서 이동하는 곳 아님</div>
        <h3>게시글 실제로 보는 곳 </h3>
        <div>제목 이랑 시간 등 정보</div>
        <div>상세 내용</div>
        <Link href="/edit/3">
          <a>
            <button>수정</button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <button>삭제</button>
          </a>
        </Link>
      </AppLayout>
    </>
  );
};
export default Get;
