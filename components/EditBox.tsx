import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import styles from "../styles/editbox.module.css";
const EditBox = (props: any) => {
  const filterAdminById = useAppSelector(
    (state) => state.admins.filteredAdmins
  );
  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    console.log("sumbit");
  };

  return (
    <div className={styles.edit_emp_container}>
      <form onSubmit={handleOnSubmit}>
        <div className={styles.input_container}>
          <label htmlFor="account">*account</label>
          <div className={styles.input_box}>
            <input placeholder={filterAdminById[0].account} />
          </div>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="account">*name</label>
          <div className={styles.input_box}>
            <input placeholder={filterAdminById[0].name} />
          </div>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="account">*phonenumber</label>
          <div className={styles.input_box}>
            <input placeholder={filterAdminById[0].phonenumber} />
          </div>
        </div>
        <div className={styles.input_box}>
          <label htmlFor="sex">*Sex</label>
          <div className={styles.input_checkbox}>
            <div>
              <input type="checkbox" name="male" />{" "}
              <label htmlFor="male">male</label>
            </div>

            <div>
              <input type="checkbox" name="female" />
              <label htmlFor="male">female</label>
            </div>
          </div>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="account">*accountnumber</label>
          <div className={styles.input_box}>
            <input placeholder={filterAdminById[0].accountnumber} />
          </div>
        </div>
        <div style={{ justifyContent: "flex-end", display: "flex" }}>
          <button className={styles.form_cancel_btn}>cancel</button>
          <button className={styles.form_submit_btn} type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBox;
