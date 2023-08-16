import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import { SupplierReducer } from "./invoice.supplier.details.reducer";
import { BuyerReducer } from "./invoice.buyer.details.reducer";
import { ProductReducer } from "./invoice.products.details";
import { TransportReducer } from "./invoice.transport.details.reducer";
export default combineReducers({
  authReducer,
  SupplierReducer,
  BuyerReducer,
  ProductReducer,
  TransportReducer,
});
