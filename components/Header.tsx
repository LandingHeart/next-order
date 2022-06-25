import styles from "../styles/header.module.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div style={{ flex: "1" }}>
        <p>员工管理</p>
      </div>

      <div className={styles.header_container__logout}>
        <a>Admin</a>
        <PowerSettingsNewIcon className={styles.header_logout__button} />
      </div>
    </div>
  );
};

export default Header;
