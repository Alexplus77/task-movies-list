import React, { useEffect } from "react";
import { MovieCard } from "components/MovieCard";
import { fetchDataSearch, fetchData } from "../../Stor/middlewares/fetchData";
import { useDispatch, useSelector } from "react-redux";
import style from "./MainPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDebounce } from "hooks/useDebounce";
import { Spin } from "antd";

export const MainPage = () => {
  const { movies, valueSearch } = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();
  const { page } = useParams();
  const navigate = useNavigate();
  const initialPage = 1;
  const debounceValue = useDebounce(valueSearch, 1000);

  useEffect(() => {
    if (debounceValue) {
      dispatch(fetchDataSearch({ debounceValue, page: initialPage }));
      navigate(`/`);
    } else {
      dispatch(fetchData(initialPage));
    }
  }, [debounceValue]);

  useEffect(() => {
    debounceValue
      ? dispatch(fetchDataSearch({ debounceValue, page }))
      : dispatch(fetchData(page));
    !page && navigate(`movies/${initialPage}`);
  }, [page]);

  return (
    <div className={style.container}>
      {movies.results?.length ? (
        movies.results.map((el) => <MovieCard key={el.id} data={el} />)
      ) : (
        <Spin className={style.spiner} tip={"Нет данных для показа"} />
      )}
    </div>
  );
};
