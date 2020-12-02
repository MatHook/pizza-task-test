import axios from "axios";

export const fetchPizzas = (url) => (dispatch) => {
  axios.get(url).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
