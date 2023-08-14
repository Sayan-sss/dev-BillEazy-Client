const SupplierReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "post_Supplier_details":
      return { state };

    case "fetch_Supplier_details":
      return { state, data: action.payload };

    default:
      return state;
  }
};
