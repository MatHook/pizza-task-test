import axios from "axios";

export const fetchPizzas = () => (dispatch) => {
  let url = "";

  if (process.env.NODE_ENV === "production") {
    url = "https://pizzashoptest.netlify.app/pizzas.json";
  }

  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:3001/pizzas";
  }

  axios.get(url).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
