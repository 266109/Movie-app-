import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slice/movieslice";
import seriesReducer from "./slice/seriesslice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer,
  },
});
