import AdminLayout from "./AdminLayout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { selectAdmin, searchById, filterAdmin } from "../store/admin.slice";
import EditBox from "./EditBox";

const Edit = (props: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = router.query;
  const filterAdminById = useAppSelector(
    (state) => state.admins.filteredAdmins
  );
  useEffect(() => {
    dispatch(searchById(id));
  }, []);

  return (
    <AdminLayout>
      <EditBox />
    </AdminLayout>
  );
};

export default Edit;
