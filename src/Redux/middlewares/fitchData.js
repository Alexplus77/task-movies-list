import axios from "axios";
import { handleFitchData } from "Redux/actions/createActions";
import { loading } from "Redux/actions/createActions";

export const fitchData = (page) => (dispatch) => {
  dispatch(loading());
  axios.get(`${process.env.REACT_APP_API}${page}`).then(({ data }) => {
    dispatch(handleFitchData(data));
  });
};
