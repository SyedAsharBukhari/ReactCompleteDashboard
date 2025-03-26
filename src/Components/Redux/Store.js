import { configureStore } from "@reduxjs/toolkit";
import sliceGetData from "./Slice";

export const store = configureStore({
  reducer: {
    Newsdata: sliceGetData,
  },
});
