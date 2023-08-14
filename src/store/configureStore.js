import reducers from "../reducers";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
export const store = configureStore(
  {
    reducer: reducers,
    // compose(applyMiddleware(thunk))
  },
);
