import type { NextPage } from "next";
import Link from "next/link";
import AppLayout from "../components/AppLayout";

const Home: NextPage = () => {
  return (
    <>
      <AppLayout>
        <div>게시글</div>
        <div>게시글</div>
        <div>게시글</div>
        <div>게시글</div>
      </AppLayout>
    </>
  );
};

export default Home;
