import type { NextPage } from "next";
import React from "react";
import Panda from "./store/panda";
import { GetStaticProps } from "next";

export const getStaticProp: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3001/employee");
  let menuItem = await res.json();
  return {
    props: {
      menuItem,
    },
  };
};

const Home: NextPage = ({ menuItem }) => {
  return <Panda />;
};

export default Home;
