import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = (url, sortBy, category) => (dispatch) => {
  dispatch(setLoaded);
  axios
    .get(
      `${url}/pizzas?${category !== null ? `category=${category}` : ""}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

export const switchCurrency = (payload) => ({
  type: "SWITCH_CURRENCY",
  payload,
});
