import React, { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import API from "../../api";

const useProformaApis = () => {
  const getProformaDetails = useCallback(async (id) => {
    try {
      // console.log(id);
      // console.log("Fetch Invoice");
      const { data } = await API.post(`/v1/api/proforma/get/${id}`);
      // console.log(data);
      dispatch({ type: "POST_INVOICE_DETAILS", payload: { data } });
      toast.success("Invoice fetched successfully");
    } catch (error) {
      toast.error(error);
    }
  }, []);

  return {
    getProformaDetails,
  };
};
export default useProformaApis;
