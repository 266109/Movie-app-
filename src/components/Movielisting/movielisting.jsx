import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/slice/movieslice";
import Moviecard from "../MovieCard/moviecard";
import "./movielisting.scss";
import { getAllSeries } from "../../features/slice/seriesslice";

const Movielisting = () => {
  const movies = useSelector(getAllMovies);
  //console.log(movies);
  const series = useSelector(getAllSeries);
  //console.log(series);

  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <Moviecard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  //console.log(renderMovies);
  renderShows =
    series.Response === "True" ? (
      series.Search.map((serie, index) => (
        <Moviecard key={index} data={serie} />
      ))
    ) : (
      <div className="movie-error">
        <h3>{series.Error}</h3>
      </div>
    );

  //console.log(renderShows);
  return (
    <div className="movie-wrapper">
      {Object.keys(renderMovies).length === 0 ||
      Object.keys(renderShows).length === 0 ? (
        <div
          style={{
            padding: "20px",
            color: "white",
          }}
        >
          <center>
            <h2>Loading...</h2>
          </center>
        </div>
      ) : (
        <>
          <div className="movie-list">
            <h2>Movies</h2>
            <div className="movie-container">{renderMovies}</div>
          </div>
          <div className="show-list">
            <h2>Series</h2>
            <div className="movie-container">{renderShows}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movielisting;
