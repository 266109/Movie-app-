import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { FetchmoviesAsync } from "../../features/slice/movieslice";
import { FetchseriesAsync } from "../../features/slice/seriesslice";

const Header = () => {
  // const searchbar = useRef();
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(term);
    dispatch(FetchmoviesAsync(term));
    dispatch(FetchseriesAsync(term));
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-bar">
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => {
              setTerm(e.target.value);
              console.log(term);
            }}
          />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="userimage">
        <img src="./user.png" alt="user" />
      </div>
    </div>
  );
};

export default Header;
