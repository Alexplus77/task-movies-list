import React, { useEffect } from "react";
import { MovieCard } from "components/MovieCard";
import { fetchData } from "src/Stor/middlewares/fetchData";
import { useDispatch, useSelector } from "react-redux";
import style from "./MainPage.module.css";
import { useNavigate, useParams } from "react-router-dom";

export const MainPage = () => {
  const { movies } = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();
  const { page } = useParams();
  const navigate = useNavigate();
  const initialPage = 1;
  useEffect(() => {
    dispatch(fetchData(page));
    !page && navigate(`movies/${initialPage}`);
  }, [page]);
  return (
    <div className={style.container}>
      {movies?.results?.map((el) => (
        <MovieCard key={el.id} data={el} />
      ))}
    </div>
  );
};
