import styles from "../styles/employee.module.css";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import ComboTable from "../components/ComboTable";
import AdminLayout from "../components/AdminLayout";

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetching data from jsonplaceholder.
  const res = await fetch("http://localhost:3001/combo");
  let comboData = await res.json();
  // Sending fetched data to the page component via props.
  return {
    props: {
      comboData,
    },
  };
};

type AppProp = {
  comboData: {
    id?: number;
    name?: string;
    account?: string;
    phonenumber?: string;
    status?: string;
  }[];
};
const Combo = ({ comboData }: AppProp) => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    setData(comboData);
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
        {data && <ComboTable data={data} />}
      </div>
    </AdminLayout>
  );
};

export default Combo;
