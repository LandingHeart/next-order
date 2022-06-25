import MenuTable from "../../components/MenuTable";
import { AppProps } from "next/app";
import styles from "../../styles/employee.module.css";
import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import AdminLayout from "../../components/AdminLayout";

export const getStaticProps: GetStaticProps = async () => {
  // Fetching data from jsonplaceholder.
  const res = await fetch("http://localhost:3001/menu");
  let menuData = await res.json();
  // Sending fetched data to the page component via props.
  return {
    props: {
      menuData,
    },
  };
};
const Menu = ({ menuData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(menuData);
    return () => {};
  }, []);

  return (
    <AdminLayout>
      <div className={styles.employee_content__container}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "15px",
            alignItems: "center",
          }}
        >
          <Input />
          <button
            style={{
              width: "110px",
              height: "40px",
              border: "none",
              backgroundColor: "#ffc201",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            +添加员工
          </button>
        </div>
        {data && <MenuTable data={data} />}
      </div>
    </AdminLayout>
  );
};

export default Menu;
