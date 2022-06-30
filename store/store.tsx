import { combineReducers } from "redux";
import admin from "./admin.slice";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

const reducer = combineReducers({
  admin,
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
