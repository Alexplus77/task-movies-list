import { Outlet, useNavigate, useParams } from "react-router-dom";
import style from "./Layout.module.css";
import { useSelector } from "react-redux";
import React from "react";
import { Header } from "components/Header";
import { Pagination } from "antd";

export const Layout = () => {
  const navigate = useNavigate();
  const initialPage = 1;
  const { movies } = useSelector((state) => state.movieReducer);
  const { id } = useParams();

  const onChange = (pageClick) => {
    navigate(`movies/${pageClick}`);
  };
  return (
    <div className={style.container}>
      <Header />
      <Outlet />
      {!id && (
        <Pagination
          current={movies.page || initialPage}
          onChange={onChange}
          total={movies.total_pages}
        />
      )}
    </div>
  );
};
