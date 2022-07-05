import styles from "../styles/header.module.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const [title, setTitle] = useState<string>("员工管理");
  const { pathname } = useRouter();
  useEffect(() => {
    switch (pathname) {
      case "/employee":
        setTitle("员工管理");
        break;
      case "/category":
        setTitle("分类管理");
        break;
      case "/menu":
        setTitle("菜品管理");
        break;
      case "/combo":
        setTitle("套餐管理");
        break;
      case "/invoice":
        setTitle("订单管理");
        break;
    }
    return () => {};
  }, [pathname]);

  return (
    <div className={styles.header_container}>
      <div style={{ flex: "1" }}>
        <p>{title}</p>
      </div>

      <div className={styles.header_container__logout}>
        <a>Admin</a>
        <PowerSettingsNewIcon className={styles.header_logout__button} />
      </div>
    </div>
  );
};

export default Header;
