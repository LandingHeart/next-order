import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import axios from "axios";
import api from "../api";
type MenuStateType = {
  menu: [
    {
      id: number;
      name: string;
      image: string;
      category: string;
      price: number;
      status: string;
    }
  ];
};

const initailState: MenuStateType = {
  menu: [
    {
      id: 0,
      name: "",
      image: "",
      category: "",
      price: 0,
      status: "",
    },
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initailState,
  reducers: {
    addMenu: (state: any, action: PayloadAction<MenuStateType>) => {
      return {
        ...state,
        menu: action.payload,
      };
    },
    deleteMenuItem: (state: any, action: PayloadAction<MenuStateType>) => {
      return {
        ...state,
        menu: [{}],
      };
    },
  },
});

export default menuSlice.reducer;

export const { addMenu, deleteMenuItem } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu;
