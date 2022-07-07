import Login from "../../../components/Login";
import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { pathname } = router;
  useEffect(() => {
    if (pathname == "/") {
      router.push("/admin");
    }
  }, []);
  return <Login />;
};

export default Home;
