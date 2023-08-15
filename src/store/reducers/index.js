import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import { SupplierReducer } from "./invoice.supplier.details.reducer";

export default combineReducers({
  authReducer,
  SupplierReducer,
});

// const reducers = () => {
//   combineReducers({
//     auth: authReducer,
//     supplierReducer: SupplierReducer
//   })
// }
// export default reducers;
