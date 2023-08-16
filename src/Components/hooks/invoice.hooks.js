import React, { useState } from "react";
import { useDispatch } from "react-redux";
import API from "../../api";
const useInvoiceApis = () => {
  const dispatch = useDispatch();
  const [supplierDetailsId, setSupplierDetailsId] = useState(null);
  const [buyerDetailsId, setBuyerDetailsId] = useState(null);
  const [productDetailsId, setProductDetailsId] = useState(null);
  const [transportDetailsId, setTransportDetailsId] = useState(null);
  //****Supplier Details*/
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
    userId,
  }) => {
    const { data } = await API.post("/v1/api/invoice/supplierdetails/create", {
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
      userId,
    });

    console.log(data);
    setSupplierDetailsId(data?._id);
    console.log(supplierDetailsId);
    dispatch({
      type: "POST_SUPPLIER_DETAILS",
      payload: {
        data,
      },
    });
  };
  //****Supplier Details*/

  //****Buyer details */
  const addBuyerDetails = async ({
    companyName,
    companyGstin,
    companyAddress,
    pincode,
    companyMobile,
    companyEmail,
    state,
    dlNo,
    city,
    gstTreatmentType,
    userId,
  }) => {
    const { data } = await API.post("/v1/api/invoice/buyerdetails/create", {
      companyName,
      companyGstin,
      companyAddress,
      pincode,
      companyMobile,
      companyEmail,
      state,
      dlNo,
      city,
      gstTreatmentType,
      userId,
    });
    console.log(data);
    setBuyerDetailsId(data?._id);
    console.log(buyerDetailsId);
    dispatch({
      type: "POST_BUYER_DETAILS",
      payload: {
        data,
      },
    });
  };
  //****Buyer details */

  ///// ***** Product Details *****//////
  const addProductDetails = async ({
    itemName,
    itemDescription,
    hsn,
    quantity,
    unit,
    salePrice,
    discount,
    discountType,
    taxType,
    gst,
    cess,
    _,
    userId,
  }) =>
    // { productdetails }
    {
      const { data } = await API.post("/v1/api/invoice/productdetails/create", {
        itemName,
        itemDescription,
        hsn,
        quantity,
        unit,
        salePrice,
        discount,
        discountType,
        taxType,
        gst,
        cess,
        _,
        userId,
      });

      dispatch({
        type: "POST_PRODUCT_DETAILS",
        payload: {
          data,
        },
      });
      setProductDetailsId(data?._id);
    };

  //  **** TransPort Details **** //
  const addTransportDetails = async ({
    type,
    lrDate,
    lrNumber,
    dateOfSupply,
    placeOfSupply,
    vehicleNumber,
    supplyType,
  }) => {
    const { data } = await API.post("/v1/api/invoice/transportdetails/create", {
      type,
      lrDate,
      lrNumber,
      dateOfSupply,
      placeOfSupply,
      vehicleNumber,
      supplyType,
    });
    console.log("data");
    console.log(data);
    dispatch({
      type: "POST_TRANSPORT_DETAILS",
      payload: {
        data,
      },
    });
    setTransportDetailsId(data?._id);
  };
  return {
    addSupplierDetails,
    addBuyerDetails,
    addProductDetails,
    addTransportDetails,
  };
};

export default useInvoiceApis;
