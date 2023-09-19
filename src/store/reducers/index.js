import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import { SupplierReducer } from "./Invoice/invoice.supplier.details.reducer";
import { BuyerReducer } from "./Invoice/invoice.buyer.details.reducer";
import { ProductReducer } from "./Invoice/invoice.products.details";
import { TransportReducer } from "./Invoice/invoice.transport.details.reducer";
import { BankReducer } from "./Invoice/invoice.bank.details.reducer";
import { InvoicesReducer } from "./Invoice/invoices.reducer";
import { Invoice_Product_Reducer } from "./Invoice/invoice_product.reducer";
export default combineReducers({
  authReducer,
  SupplierReducer,
  BuyerReducer,
  ProductReducer,
  TransportReducer,
  BankReducer,
  InvoicesReducer,
  Invoice_Product_Reducer,
});
