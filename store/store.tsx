import { combineReducers } from "redux";
import admins from "./admin.slice";
import menu from "./menu.slice";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

const reducer = combineReducers({
  admins,
  menu,
});

export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {admins: admins}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
