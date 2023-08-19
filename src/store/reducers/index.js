import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import { SupplierReducer } from "./Invoice/invoice.supplier.details.reducer";
import { BuyerReducer } from "./Invoice/invoice.buyer.details.reducer";
import { ProductReducer } from "./Invoice/invoice.products.details";
import { TransportReducer } from "./Invoice/invoice.transport.details.reducer";
import { BankReducer } from "./Invoice/invoice.bank.details.reducer";
export default combineReducers({
  authReducer,
  SupplierReducer,
  BuyerReducer,
  ProductReducer,
  TransportReducer,
  BankReducer,
});
