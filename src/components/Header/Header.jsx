import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleValueSearch } from "Stor/movieSlice";
import { Input } from "antd";
import style from "./Header.module.css";

export const Header = () => {
  const { movies } = useSelector((state) => state.movieReducer);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(handleValueSearch(e.target.value));
  };
  return (
    <header className={style.container}>
      <strong className={style.title}>
        You are on {movies.page} page of your site.
      </strong>
      <Input.Search onChange={(e) => handleSearch(e)} />
    </header>
  );
};
