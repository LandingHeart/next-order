import Login from "../../components/Login";
import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectAdmin } from "../../store/admin.slice";

type AppProps = {
  user: {
    email: string;
    password: string;
  };
};

const setUser = () => {};

const Home = ({ user }: AppProps) => {
  const { admin } = useAppSelector(selectAdmin);
  useEffect(() => {
    console.log(admin);
  });
  return <>{admin !== null ? <Login /> : <>admin null</>}</>;
};

export default Home;
