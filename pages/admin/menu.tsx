import MenuTable from "../../components/MenuTable";
import styles from "../styles/employee.module.css";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import Input from "../../components/Input";
import AdminLayout from "../../components/AdminLayout";
import { useAppDispatch } from "../../store/hooks";
import { addMenu } from "../../store/menu.slice";
export const getServerSideProps: GetServerSideProps = async () => {
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
type AppProp = {
  menuData: {
    id?: number;
    name?: string;
    image?: string;
    category?: string;
    price?: number;
    status?: string;
  }[];
};
const Menu = ({ menuData }: AppProp) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addMenu(Object(menuData)));
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
        <MenuTable />
      </div>
    </AdminLayout>
  );
};

export default Menu;
