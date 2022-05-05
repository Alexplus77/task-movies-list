import React from "react";
import style from "./MovieCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { saveDataMovie } from "State/movieSlice";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";

export const MovieCard = ({ data }) => {
  const POSTER_PATH = `${process.env.REACT_APP_POSTER_PATH}${data.poster_path}`;
  const descriptionMovie = data.overview.split(" ").slice(0, 7).join(" ");
  const { loading } = useSelector((state) => state.movieReducer);
  const { Meta } = Card;
  const dispatch = useDispatch();

  const handleClickButton = (data) => {
    dispatch(saveDataMovie(data));
  };
  return (
    <Card
      loading={loading}
      className={style.container}
      cover={<img className={style.image} alt="example" src={POSTER_PATH} />}
    >
      <Meta
        className={style.meta}
        title={data.title}
        description={descriptionMovie + "..."}
      />
      <Link to={`${data.id}`}>
        <Button
          onClick={() => handleClickButton(data)}
          className={style.btn}
          type={"primary"}
        >
          view more
        </Button>
      </Link>
    </Card>
  );
};
