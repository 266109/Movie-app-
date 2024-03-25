import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApikey";

export const FetchseriesAsync = createAsyncThunk(
  "series/FetchSeriesAsync",
  async (term) => {
    //const seriestext = "Friends";
    const response = await movieApi
      .get(`?apikey=${APIKey}&s=${term}&type=series`)
      .catch((err) => {
        console.log(err);
      });

    return response.data;
  }
);
// export const FetchseriesAsync = createAsyncThunk(
//   "movies/FetchSeriesAsync",
//   async () => {
//     const seriestext = "Friends";
//     const response = await movieApi
//       .get(`?apikey=${APIKey}&s=${seriestext}&type=series`)
//       .catch((err) => {
//         console.log(err);
//       });

//     return response.data;
//   }
// );

const initialState = {
  series: {},
};

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    addSeries: (state, { payload }) => {
      state.series = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchseriesAsync.pending, () => {
      console.log("Series Pending");
    });
    builder.addCase(FetchseriesAsync.fulfilled, (state, { payload }) => {
      console.log("Series Fulfilled");
      return { ...state, series: payload };
    });
    builder.addCase(FetchseriesAsync.rejected, () => {
      console.log("Series Rejected");
    });
  },
});

export const { addSeries } = seriesSlice.actions;

export const getAllSeries = (state) => state.series.series;
export default seriesSlice.reducer;
