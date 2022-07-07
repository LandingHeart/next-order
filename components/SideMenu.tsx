import styles from "../styles/sidemenu.module.css";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GridViewIcon from "@mui/icons-material/GridView";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RedeemIcon from "@mui/icons-material/Redeem";
import DescriptionIcon from "@mui/icons-material/Description";
const SideMenu = () => (
  <ul className={styles.side_nav__list}>
    <Image src={logo} alt="logo png" width={120} height={31} />
    <li>
      <AccountCircleIcon
        style={{ color: "#bfcbd9", paddingTop: "20px", marginRight: "3px" }}
      />

      <Link href="/admin/employee">
        <a className={styles.side_nav__listlink}>员工管理</a>
      </Link>
    </li>
    <li>
      <GridViewIcon
        style={{ color: "#bfcbd9", paddingTop: "20px", marginRight: "3px" }}
      />
      <Link href="/admin/category">
        <a className={styles.side_nav__listlink}>分内管理</a>
      </Link>
    </li>
    <li>
      <FastfoodIcon
        style={{ color: "#bfcbd9", paddingTop: "20px", marginRight: "3px" }}
      />
      <Link href="/admin/menu">
        <a className={styles.side_nav__listlink}>菜品管理</a>
      </Link>
    </li>
    <li>
      <RedeemIcon
        style={{ color: "#bfcbd9", paddingTop: "20px", marginRight: "3px" }}
      />
      <Link href="/admin/combo">
        <a className={styles.side_nav__listlink}>套餐管理</a>
      </Link>
    </li>
    <li>
      <DescriptionIcon
        style={{ color: "#bfcbd9", paddingTop: "20px", marginRight: "3px" }}
      />
      <Link href="/admin/invoice">
        <a className={styles.side_nav__listlink}>订单明细</a>
      </Link>
    </li>
  </ul>
);

export default SideMenu;
