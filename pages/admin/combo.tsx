import styles from "../../styles/employee.module.css";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import ComboTable from "../../components/ComboTable";
import AdminLayout from "../../components/AdminLayout";

export const getStaticProps: GetStaticProps = async () => {
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
const Combo = ({ comboData }) => {
  const [data, setData] = useState([]);

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