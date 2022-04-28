import React from "react";
import { useSelector } from "react-redux";
import style from "./Header.module.css";
export const Header = () => {
  const { movies } = useSelector((state) => state.stateReducer);
  return (
    <header className={style.container}>
      <strong>You are on {movies.page} page of your site.</strong>
    </header>
  );
};
