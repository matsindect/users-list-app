// src/store/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
