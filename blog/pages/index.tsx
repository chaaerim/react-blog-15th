import type { NextPage } from "next";
import Link from "next/link";
import AppLayout from "../components/AppLayout";
import { RecoilRoot, useRecoilState } from "recoil";
import { postList } from "../store/recoil";
import Alist from "../components/Alist";

const Home: NextPage = () => {
  const [posts, setPosts] = useRecoilState(postList);

  return (
    <>
      <AppLayout>
        <Alist />
      </AppLayout>
    </>
  );
};

export default Home;
