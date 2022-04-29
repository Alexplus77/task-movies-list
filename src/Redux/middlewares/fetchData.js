import axios from "axios";
import { handleFetchData } from "Redux/actions/createActions";
import { loading } from "Redux/actions/createActions";

export const fetchData = (page) => (dispatch) => {
  dispatch(loading());
  axios.get(`${process.env.REACT_APP_API}${page}`).then(({ data }) => {
    dispatch(handleFetchData(data));
  });
};
