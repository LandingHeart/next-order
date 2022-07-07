import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { pathname } = router;
  useEffect(() => {
    if (pathname == "/admin") {
      router.push("/admin/login");
    }
  }, []);
  return null;
};

export default Home;
