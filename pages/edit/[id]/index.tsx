import Edit from "../../../components/Edit";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import {
  selectAdmin,
  searchById,
  filterAdmin,
} from "../../../store/admin.slice";
import AdminLayout from "../../../components/AdminLayout";
import EditBox from "../../../components/EditBox";
const Home = (props: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = router.query;
  const filterAdminById = useAppSelector(
    (state) => state.admins.filteredAdmins
  );
  useEffect(() => {
    dispatch(searchById(id));
    setTimeout(() => {
      console.log(filterAdminById);
    }, 1000);
  }, []);

  return (
    <>
      {filterAdminById !== null ? (
        <AdminLayout>
          <EditBox />
        </AdminLayout>
      ) : (
        <>{router.push("/employee")}</>
      )}
    </>
  );
};

export default Home;
