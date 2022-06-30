import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import loginBanner from "../public/login-banner.png";
import logo from "../public/logo-black.png";
import { useRouter } from "next/router";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import * as Yup from "yup";
import { SchemaOf } from "yup";
import styled from "styled-components";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addAdmin, removeAdmin, selectAdmin } from "../store/admin.slice";
import styles from "../styles/login.module.css";
type UserProp = {
  email: string;
  password: string;
};

const schema: SchemaOf<UserProp> = Yup.object().shape({
  email: Yup.string().required("Email required"),
  password: Yup.string().required("Password is required"),
});

const handleOnSubmit = () => {};

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const admin = useAppSelector(selectAdmin);

  useEffect(() => {
    console.log("admin ", typeof admin);
    return () => {};
  }, [admin]);
  const handleLogin = (e: any) => {
    e.preventDefault();
    const admin = {
      email: email,
      password: password,
    };
    dispatch(addAdmin(Object(admin)));
  };
  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const adminAuth = () => {};
  return (
    <div className={styles.main_container}>
      <div className={styles.login_form_container}>
        <div className={styles.col1}>
          <Image src={loginBanner} layout="fixed" height={474} width={533} />
        </div>
        <div className={styles.col2}>
          <form className={styles.form}>
            <Image src={logo} alt="logo png" width={149} height={38} />
            <div className={styles.input_container}>
              <span style={{ marginBottom: "5px" }}>
                <AccountCircleIcon style={{ color: "#a3a3a3" }} />
              </span>

              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                style={{ width: "214px", border: "none" }}
              />
            </div>
            <div className={styles.input_container}>
              <span style={{ marginBottom: "5px" }}>
                <LockIcon style={{ color: "#a3a3a3" }} />
              </span>

              <input
                type="password"
                value={password}
                onChange={handlePassChange}
                style={{ width: "214px", border: "none" }}
              />
            </div>
            <button
              className={styles.button}
              onClick={(e: any) => handleLogin(e)}
              style={{}}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
