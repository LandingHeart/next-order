import styles from "../styles/employee.module.css";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import InvoiceTable from "../../components/InvoiceTable";
import AdminLayout from "../../components/AdminLayout";

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetching data from jsonplaceholder.
  const res = await fetch("http://localhost:3001/invoice");
  let invoiceData = await res.json();
  // Sending fetched data to the page component via props.
  return {
    props: {
      invoiceData,
    },
  };
};

type AppProp = {
  invoiceData: {
    id?: string;
    name?: string;
    account?: string;
    phonenumber?: string;
    status?: string;
  }[];
};
const Invoice = ({ invoiceData }: AppProp) => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    setData(invoiceData);
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
        {data && <InvoiceTable data={data} />}
      </div>
    </AdminLayout>
  );
};

export default Invoice;
