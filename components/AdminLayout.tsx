import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import SideMenu from "./SideMenu";
import styles from "../styles/layout.module.css";
import Header from "./Header";
type Props = {
  children?: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <section className={styles.main_content}>
      <section className={styles.sidemenu_container}>
        <SideMenu />
      </section>
      <section className={styles.main_content__container}>
        <Header />
        <main>{children}</main>
      </section>
    </section>
  );
};

export default AdminLayout;
