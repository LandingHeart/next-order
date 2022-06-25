import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import UserLayout from "../../components/UserLayout";

export const getStaticProps: GetStaticProps = async () => {
  // Fetching data from jsonplaceholder.
  const res = await fetch("http://localhost:3001/menu");
  let menuItem = await res.json();
  // Sending fetched Item to the page component via props.
  return {
    props: {
      menuItem,
    },
  };
};
type AppProp = {
  menuItem: {
    id?: number;
    name?: string;
    account?: string;
    phonenumber?: string;
    status?: string;
  }[];
};
const Panda = ({ menuItem }: AppProp) => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    setData(menuItem);
    return () => {};
  }, []);
  console.log("panda");
  return (
    <UserLayout>
      <h1>panda</h1>
    </UserLayout>
  );
};

export default Panda;
