const initialState = {
  data: {},
};
export const BuyerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_BUYER_DETAILS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_BUYER_DETAILS":
      return { state, data: action.payload };

    default:
      return state;
  }
};
