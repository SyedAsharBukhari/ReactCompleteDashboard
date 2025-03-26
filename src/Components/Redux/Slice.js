import { createSlice } from "@reduxjs/toolkit";
import { fetchcrimenews, fetchnews } from "./Fetch";

const sliceGetData = createSlice({
  name: "News",

  initialState: {
    data: null,
    status: "idle",
    error: null,
    // crimenews
    crimeData: null,
    crimeStatus: "idle",
    crimeError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchnews.pending, (state, action) => {
      state.data = null;
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchnews.fulfilled, (state, { payload }) => {
      console.log("payload", payload);

      state.data = payload;
      state.status = "succeed";
      state.error = null;
    });

    builder.addCase(fetchnews.rejected, (state, action) => {
      state.data = null;
      state.status = "idle";
      state.error = action.error;
    });

    // Crimes news
    builder.addCase(fetchcrimenews.pending, (state, action) => {
      state.crimeData = null;
      state.crimeStatus = "loading";
      state.crimeError = null;
    });
    builder.addCase(fetchcrimenews.fulfilled, (state, { payload }) => {
      state.crimeData = payload?.data?.results;
      console.log("psadkfkjisd=========", payload);

      state.crimeStatus = "succeed";
      state.crimeError = null;
    });
    builder.addCase(fetchcrimenews.rejected, (state, action) => {
      state.crimeData = null;
      state.crimeStatus = "idle";
      state.crimeError = action.error;
    });
  },
});

export default sliceGetData.reducer;
