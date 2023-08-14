import React from 'react'
import { useDispatch } from 'react-redux';

const useInvoiceApis = () => {
  const dispatch = useDispatch();
  const addSupplierDetails = (data) => {
    console.log(data);
    dispatch({
      type: "POST_SUPPLIER_DETAILS",
      payload: {
        data,
      }
    })
  }
  return {
    addSupplierDetails
  }
}

export default useInvoiceApis;