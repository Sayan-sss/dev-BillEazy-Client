import React from "react";
import { useDispatch } from "react-redux";
import API from "../../api";
const useInvoiceApis = () => {
  const dispatch = useDispatch();
  const addSupplierDetails = async ({
    firmName,
    companyGstin,
    companyAddress,
    companyEmail,
    dlNo,
    city,
    state,
    pincode,
    mobileNumber,
    companyPan,
  }) => {
    const { data } = await API.post("api/invoice/supplierdetails/create", {
      firmName,
      companyGstin,
      companyAddress,
      companyEmail,
      dlNo,
      city,
      state,
      pincode,
      mobileNumber,
      companyPan,
    });
    console.log(data);
    dispatch({
      type: "POST_SUPPLIER_DETAILS",
      payload: {
        data,
      },
    });
  };
  return {
    addSupplierDetails,
  };
};

export default useInvoiceApis;
