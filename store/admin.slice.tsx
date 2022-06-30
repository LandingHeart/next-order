import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type AdminStateType = {
  admin: Object;
};

const initailState: AdminStateType = {
  admin: {},
};

const adminSlice = createSlice({
  name: "admins",
  initialState: initailState,
  reducers: {
    addAdmin: (state: any, action: PayloadAction<AdminStateType>) => {
      console.log("payload ", action.payload);
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
  },
});

export default adminSlice.reducer;

export const { addAdmin, removeAdmin } = adminSlice.actions;

export const selectAdmin = (state: RootState) => state.admin;
