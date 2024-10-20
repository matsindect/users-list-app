// src/store/index.ts
import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./rootReducer";
import { UsersAction } from "./users/types";

const store = configureStore({
  reducer: rootReducer,
  // You can add middleware here if needed
});
// Type for the thunk action, ensuring proper typing for async actions
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UsersAction
>;
export type AppDispatch = typeof store.dispatch;
export default store;
