import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApikey";

export const FetchmoviesAsync = createAsyncThunk(
  "movies/FetchMoviesAsync",
  async (term) => {
    //const movietext = "Harry";
    const response = await movieApi
      .get(`?apikey=${APIKey}&s=${term}&type=movie`)
      .catch((err) => {
        console.log(err);
      });

    return response.data;
  }
);

export const FetchmovieDetailsAsync = createAsyncThunk(
  "movies/FetchMovieDetailAsync",
  async (Id) => {
    const response = await movieApi
      .get(`?apikey=${APIKey}&i=${Id}&Plot=full`)
      .catch((err) => {
        console.log(err);
      });

    return response.data;
  }
);

const initialState = {
  movies: {},
  selectedMovie: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovie: (state) => {
      state.selectedMovie = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchmoviesAsync.pending, () => {
      console.log("Movies pending");
    });

    builder.addCase(FetchmoviesAsync.fulfilled, (state, { payload }) => {
      console.log("Movies Fulfilled");
      return { ...state, movies: payload };
    });

    builder.addCase(FetchmoviesAsync.rejected, () => {
      console.log("Movies rejected");
    });

    builder.addCase(FetchmovieDetailsAsync.fulfilled, (state, { payload }) => {
      console.log("Movies details Fulfilled");
      return { ...state, selectedMovie: payload };
    });
  },
});

export const { addMovies, removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectedMovie;

export default movieSlice.reducer;
