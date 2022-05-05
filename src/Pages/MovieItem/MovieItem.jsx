import React, { useEffect } from "react";
import { Card, Row } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import style from "./MovieItem.module.css";

export const MovieItem = () => {
  const { movieItem } = useSelector((state) => state.movieReducer);
  const POSTER_PATH = `${process.env.REACT_APP_POSTER_PATH}${movieItem?.poster_path}`;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(movieItem);
    !movieItem && navigate(-1);
  }, []);

  return (
    movieItem && (
      <Row className={style.container}>
        <Card>
          <img className={style.img} alt="poster-image" src={POSTER_PATH} />
        </Card>
        <Card title={<strong>{movieItem?.title}</strong>}>
          <div className={style?.about}>
            <strong>Vote average: {movieItem?.vote_average}</strong>
            <em>Date release: {movieItem?.release_date}</em>
            <em>Original language: {movieItem?.original_language}</em>
            <p>Describe: {movieItem?.overview}</p>
          </div>
          <Link className={style.icon} to={-1}>
            <ArrowLeftOutlined /> Back
          </Link>
        </Card>
      </Row>
    )
  );
};
