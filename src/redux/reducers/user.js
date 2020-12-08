const initialState = {
  isLoggined: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGINED":
      return {
        ...state,
        isLoggined: action.payload,
      };
    default:
      return state;
  }
};

export default user;
