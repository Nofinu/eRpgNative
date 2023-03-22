import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "../Data/DataSlice";


export const Store = configureStore({
  reducer:{
    data:DataSlice
  }
})