import styles from "../styles/employee.module.css";
import { useEffect } from "react";
import Input from "../../components/Input";
import { GetServerSideProps } from "next";
import AdminLayout from "../../components/AdminLayout";
import { useAppDispatch } from "../../store/hooks";
import { addAdmin } from "../../store/admin.slice";
import EmployeeTable from "../../components/EmployeeTable";

type AppProp = {
  employeeData: {
    id: string;
    name: string;
    account: string;
    phonenumber: string;
    status: string;
  }[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3001/employee");
  let employeeData: AppProp = await res.json();
  return {
    props: {
      employeeData,
    },
  };
};
const Employee = ({ employeeData }: AppProp) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addAdmin(Object(employeeData)));
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
        <EmployeeTable />
      </div>
    </AdminLayout>
  );
};

export default Employee;
