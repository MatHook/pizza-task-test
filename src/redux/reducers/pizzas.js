const initialState = {
  items: [],
  isLoaded: false,
  isDollar: true,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };
    case "SWITCH_CURRENCY":
      return {
        ...state,
        isDollar: action.payload,
      };
    default:
      return state;
  }
};

export default pizzas;
