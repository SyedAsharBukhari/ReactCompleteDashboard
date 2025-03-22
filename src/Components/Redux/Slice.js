import { createSlice } from "@reduxjs/toolkit";
import { fetchnews } from "./Fetch";

const slice = createSlice({
  name: "News",
  initialState: {
    new: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchnews.pending, (state, action) => {});
    builder.addCase(fetchnews.fulfilled, (state, action) => {});
    builder.addCase(fetchnews.rejected, (state, action) => {});
  },
});

export default slice.reducer;
