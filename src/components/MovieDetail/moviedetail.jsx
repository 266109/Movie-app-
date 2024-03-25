import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchmovieDetailsAsync,
  getSelectedMovie,
  removeSelectedMovie,
} from "../../features/slice/movieslice";
import "./moviedetail.scss";

const Moviedetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovie);
  console.log("Selected Movie:", data);
  useEffect(() => {
    dispatch(FetchmovieDetailsAsync(imdbID));

    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [dispatch, imdbID]);
  return (
    <>
      <div className="movie-section">
        {Object.keys(data).length === 0 ? (
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
            <div className="section-left">
              <div className="movie-title">{data.Title}</div>
              <div className="movie-rating">
                <span>
                  IMDB Rating <i className="fa fa-star"></i>: {data.imdbRating}
                </span>
                <span>
                  IMDB Votes <i className="fa fa-thumbs-up"></i>:{" "}
                  {data.imdbVotes}
                </span>
                <span>
                  Runtime <i className="fa fa-film"></i>: {data.Runtime}
                </span>
                <span>
                  Year <i className="fa fa-calendar"></i>: {data.Year}
                </span>
              </div>
              <div className="movie-plot">
                <p>{data.Plot}</p>
              </div>
              <div className="other-details">
                <div className="movie-director">
                  {" "}
                  <span className="s1"> Director </span>
                  <span className="s2">{data.Director}</span>
                </div>
                <div className="movie-stars">
                  {" "}
                  <span className="s1"> Stars </span>
                  {""}
                  <span className="s2">{data.Actors}</span>
                </div>
                <div className="movie-generes">
                  {" "}
                  <span className="s1"> Generes </span>
                  <span className="s2">{data.Genre}</span>
                </div>
                <div className="movie-Languages">
                  {" "}
                  <span className="s1"> Languages </span>
                  <span className="s2">{data.Language}</span>
                </div>
                <div className="movie-Awards">
                  {" "}
                  <span className="s1">Awards</span>
                  {""}
                  <span className="s2">{data.Awards}</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img src={data.Poster} alt={data.Title} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Moviedetail;
