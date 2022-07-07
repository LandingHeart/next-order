import React, { useEffect, useState } from "react";
import loginBanner from "../public/login-banner.png";
import logo from "../public/logo-black.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import * as Yup from "yup";
import { SchemaOf } from "yup";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectAdmin, adminLogin } from "../store/admin.slice";
import { useRouter } from "next/router";
import styles from "../styles/login.module.css";
type UserProp = {
  name: string;
  password: string;
};

const Login = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isLoggedIn = useAppSelector((state) => state.admins.loggedInAdmin);
  useEffect(() => {
    setTimeout(() => {
      setErrMessage("");
    }, 10000);
    return () => {};
  }, [errMessage]);
  const handleLogin = (e: any) => {
    e.preventDefault();

    const adminData = {
      name: name,
      password: password,
    };

    let isSucess;
    console.log(isLoggedIn);
    //is successful loged in
    if (isSucess) {
      dispatch(adminLogin(Object(adminData)));
      router.push("/admin/employee");
    } else {
      setErrMessage("name and password is blank");
    }
  };
  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlenameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let name = event.target.value;
    validateName(name);
    setName(event.target.value);
  };
  const validateName = (name: string) => {
    let nameRegex = /^[a-zA-Z0-9]*$/;
    let isValidName = nameRegex.test(name);
    if (!isValidName) {
      setErrMessage("name shouldn't include symbols");
    } else if (name.length < 4) {
      setErrMessage("name should be longer than 4 character");
    } else if (name === "") {
      setErrMessage("name should not be empty");
    } else {
      setErrMessage("");
    }
    if (name.length === 0) {
      setErrMessage("");
    }
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.login_form_container}>
        <div className={styles.col1}>
          <Image src={loginBanner} layout="fixed" height={474} width={533} />
        </div>

        <div className={styles.col2}>
          <form onSubmit={handleLogin} className={styles.form}>
            <Image src={logo} alt="logo png" width={149} height={38} />
            <div className={styles.input_container}>
              <span style={{ marginBottom: "5px" }}>
                <AccountCircleIcon
                  style={{ color: "#a3a3a3", position: "absolute" }}
                />
              </span>

              <input
                className={styles.input}
                type="name"
                value={name}
                onChange={handlenameChange}
                style={{ width: "214px" }}
                required={true}
              />
            </div>
            <p className={styles.input_err_message}>{errMessage}</p>

            <div className={styles.input_container}>
              <span style={{ marginBottom: "5px" }}>
                <LockIcon style={{ color: "#a3a3a3", position: "absolute" }} />
              </span>

              <input
                className={styles.input}
                type="password"
                value={password}
                onChange={handlePassChange}
                style={{ width: "214px" }}
                required={true}
              />
            </div>
            <button
              type="submit"
              className={styles.button}
              onClick={(e: any) => handleLogin(e)}
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
