import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { SupplierReducer } from "./invoice.supplier.details.reducer"

export default combineReducers({
  auth: authReducer,
  supplierReducer: SupplierReducer
});


// const reducers = () => {
//   combineReducers({
//     auth: authReducer,
//     supplierReducer: SupplierReducer
//   })
// }
// export default reducers;