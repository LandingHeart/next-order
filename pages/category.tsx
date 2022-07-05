import styles from "../styles/employee.module.css";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import CategoryTable from "../components/CategoryTable";
import { GetServerSideProps } from "next";
import AdminLayout from "../components/AdminLayout";

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetching data from jsonplaceholder.
  const res = await fetch("http://localhost:3001/category");
  let categoryData = await res.json();
  // Sending fetched data to the page component via props.
  return {
    props: {
      categoryData,
    },
  };
};

type AppProp = {
  categoryData: {
    id?: string;
    name?: string;
    account?: string;
    phonenumber?: string;
    status?: string;
  }[];
};
const Category = ({ categoryData }: AppProp) => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    setData(categoryData);
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
        {data && <CategoryTable data={data} />}
      </div>
    </AdminLayout>
  );
};

export default Category;
