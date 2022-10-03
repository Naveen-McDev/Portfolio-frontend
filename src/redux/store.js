import rootSlice from "./rootSlice";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// reducer
const reducer = combineReducers({
  root: rootSlice,
});

// store
const store = configureStore({
  reducer,
});

export default store;
