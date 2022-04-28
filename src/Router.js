import { Route, Routes } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { MainPage } from "./Pages/MainPage";
import { MovieItem } from "./Pages/MovieItem";

export const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={"movies/:page"} element={<MainPage />} />
        <Route path={"movies/:page/:id"} element={<MovieItem />} />
      </Route>
    </Routes>
  );
};
