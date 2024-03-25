import React, { useEffect } from "react";
import Movielisting from "../Movielisting/movielisting";

import { useDispatch } from "react-redux";
import { FetchmoviesAsync } from "../../features/slice/movieslice";
import { FetchseriesAsync } from "../../features/slice/seriesslice";
//import axios from "axios";

const Home = () => {
  // const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    // const fetchMovies = async () => {
    //   //   const response = await movieApi
    //   //     .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //   //     .catch((err) => {
    //   //       console.log(err);
    //   //     });
    //   dispatch(addMovies(response.data));
    //   console.log("the response is:", response);
    // };
    //fetchMovies();
    const textm = "India";
    dispatch(FetchmoviesAsync(textm));
    dispatch(FetchseriesAsync(textm));
  }, [dispatch]);
  return (
    <>
      <div className="banner-img">
        <Movielisting />
      </div>
    </>
  );
};

export default Home;
