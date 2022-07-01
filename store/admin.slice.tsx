import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import axios from "axios";
import api from "../api";
type AdminStateType = {
  admin: [
    {
      id: number;
      name: string;
      account: string;
      phonenumber: string;
      status: string;
    }
  ];
};

type AdminType = {
  name: string;
  password: string;
};
const initailState: AdminStateType = {
  admin: [
    {
      id: 0,
      name: "",
      account: "",
      phonenumber: "",
      status: "",
    },
  ],
};

const adminSlice = createSlice({
  name: "admins",
  initialState: initailState,
  reducers: {
    addAdmin: (state: any, action: PayloadAction<AdminStateType>) => {
      return {
        ...state,
        admin: action.payload,
      };
    },
    removeAdmin: (state: any, action: PayloadAction<AdminStateType>) => {
      return {
        ...state,
        admin: [{}],
      };
    },
    getAdmin: (state: any, action: PayloadAction<AdminStateType>) => {
      //   const res = api.get("/employee");
      //   console.log("admin list", res);
      return {
        ...state,
      };
    },
  },
});

export const adminLogin = createAsyncThunk(
  "admin/login",
  async ({ name, password }: AdminType) => {
    try {
      const res = api.post("/admin/login", {
        name,
        password,
      });
    } catch (err) {
      console.log("admin login err ", err);
    }
  }
);

export default adminSlice.reducer;

export const { addAdmin, removeAdmin, getAdmin } = adminSlice.actions;

export const selectAdmin = (state: RootState) => state.admin;
