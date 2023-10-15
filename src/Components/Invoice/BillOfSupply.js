import React from "react";
// import { useSelector } from "react-redux";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import logo from "../Assets/icon.png";

// Create styles
Font.register({ family: "Roboto", fontWeight: "heavy" });
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  },

  items_text: {
    fontSize: 10,
    fontWeight: "ultrabold",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textOverflow: "clipped",
  },
  items_Aligntext: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: 10,
    fontWeight: "ultrabold",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textOverflow: "clipped",
  },

  items_Banktext: {
    fontSize: 8,
    fontWeight: "ultrabold",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textOverflow: "clipped",
  },
  items_texts: {
    fontSize: 10,
    fontWeight: "ultrabold",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textOverflow: "clipped",
  },
  items_texts_last: {
    fontSize: 10,
    fontWeight: "ultrabold",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textOverflow: "clipped",
  },

  parentContainer: {
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: "15",
    flexGrow: 1,
    minWidth: 100,
    display: "flex",
  },

  logo: {
    // border: "1px solid red",
    height: 100,
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    // marginHorizontal: 1,
    // paddingHorizontal: 2,
    width: "20%",
  },

  supplierDetails: {
    // border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "80%",
  },

  supplierTitle: {
    border: "1px solid red",
    display: "flex",
    // backgroundColor: "red",
    // alignItems: "flex-end",
    // justifyContent: "flex-end",
    fontSize: "15",
    fontWeight: "bold",
    paddingVertical: 1,
    width: "100%",
  },
  supplier: {
    // border: "1px solid red",
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    textAlign: "center",
    marginRight: "10%",
    fontSize: "10",
    fontWeight: "bold",
    paddingVertical: 1,
    width: "100%",
  },

  title: {
    fontWeight: "bold",
    marginLeft: "10rem",
  },

  text: {
    fontSize: "10",
  },
  TitleText: {
    marginTop: "5",
    marginBottom: "5",
    color: "white",
    fontSize: "10",
  },
});

var converter = require("number-to-words");
// const { token, user } = data;
// const { data } = useSelector((state) => state.Single_Invoice_Reducer);
// console.log(data);
// Create Document Component
export const BillOfSupply = ({
  supplierDetails,
  buyerDetails,
  bankDetails,
  product,
  transportDetails,
  termsAndConditions,
  totalProductPrice,
  totalTaxAmount,
}) => (
  <Document>
    {/* console.log(product) */}
    <Page size="A4" style={styles.page}>
      <View style={styles.parentContainer}>
        <View
          style={{
            border: "1px solid black",
            width: "100%",
            minHeight: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.logo}>
            <Image src={logo} />
          </View>

          <View style={styles.supplierDetails}>
            <Text style={{ marginRight: "12%" }}>
              {supplierDetails?.firmName}
            </Text>
            <Text style={styles.supplier}>
              {supplierDetails?.companyAddress}
            </Text>
            <Text style={styles.supplier}>
              {supplierDetails?.companyMobile},
            </Text>
            <Text style={styles.supplier}>
              {supplierDetails?.companyemail},
            </Text>
            <Text style={styles.supplier}>
              {supplierDetails?.companyPan},{supplierDetails?.dl}
            </Text>
          </View>
        </View>
        <View
          style={{
            // fontWeight: 1000,
            letterSpacing: "1.5",
            fontSize: "15",
            // fontWeight: "heavy",
            borderRight: "1px solid black",
            borderLeft: "1px solid black",
            borderBottom: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#073259",
            height: 30,
            color: "white",
          }}
        >
          <Text style={{ marginLeft: "10%", fontWeight: "heavy" }}>
            BILL OF SUPPLY
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
            height: 55,
          }}
        >
          <View
            style={{
              borderRight: "1px solid black",
              borderLeft: "1px solid black",
              borderBottom: "1px solid black",
              height: "100%",
              width: "50%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: "100%",
                width: "50%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: 3,
              }}
            >
              <Text style={styles.text}>Reverse Charge</Text>
              <Text style={styles.text}>Invoice No.</Text>
              <Text style={styles.text}>Invoice Date</Text>
              <Text style={styles.text}>State</Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "50%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {" "}
              <Text style={styles.text}>: Reverse Charge</Text>
              <Text style={styles.text}>: Invoice No.</Text>
              <Text style={styles.text}>: Invoice Date</Text>
              <Text style={styles.text}>: State</Text>
            </View>
          </View>
          <View
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: "100%",
              width: "50%",
            }}
          >
            <View
              style={{
                height: "100%",
                width: "50%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: 3,
              }}
            >
              {" "}
              <Text style={styles.text}>Challan No.</Text>
              <Text style={styles.text}>Vehicle No.</Text>
              <Text style={styles.text}>Place of Supply</Text>
              <Text style={styles.text}>State Code</Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "50%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {" "}
              <Text style={styles.text}>: Reverse Charge</Text>
              <Text style={styles.text}>: Invoice No.</Text>
              <Text style={styles.text}>: Invoice Date</Text>
              <Text style={styles.text}>: State</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            // borderBottom: "1px solid black",
            // height: "30%",
            width: "100%",
            backgroundColor: "#073259",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <Text style={styles.TitleText}>Details of Receiver | Billed to:</Text>
          <Text style={styles.TitleText}>
            Details of Consignee | Shipped to:
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
            height: 55,
            // border: "1px solid red",
          }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              width: "50%",
              border: "1px solid black",
              height: "100%",
            }}
          >
            <View
              style={{
                height: "100%",
                width: "20%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                marginLeft: 3,
                marginTop: 5,
              }}
            >
              <Text style={styles.text}>Name</Text>
              <Text style={styles.text}>Address</Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "80%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                marginLeft: 3,
                marginRight: 3,
                marginTop: 5,
              }}
            >
              <Text style={styles.text}>: Sayan Mondal</Text>
              <Text style={styles.text}>
                : Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus at cum sit fugiat consectetur excepturi hic qui nulla
                aperiam a?
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              width: "50%",
              borderRight: "1px solid black",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              height: "100%",
            }}
          >
            <View
              style={{
                height: "100%",
                width: "20%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                marginLeft: 3,
                marginTop: 5,
              }}
            >
              <Text style={styles.text}>Name</Text>
              <Text style={styles.text}>Address</Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "80%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                marginLeft: 3,
                marginRight: 3,
                marginTop: 5,
              }}
            >
              <Text style={styles.text}>: Sayan Mondal</Text>
              <Text style={styles.text}>
                : Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus at cum sit fugiat consectetur excepturi hic qui nulla
                aperiam a?
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // backgroundColor: "#073259",
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
              // width: "5%",
            }}
          >
            <Text style={styles.items_text}>No.</Text>
            {product?.map((product, index) => (
              <Text style={styles.items_texts}>{index} </Text>
            ))}
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
              Width: "10%",
            }}
          >
            <Text style={styles.items_text}>Name Of Product </Text>
            {product?.map((product) => (
              <Text style={styles.items_texts}>{product?.itemName} </Text>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>HSN</Text>
            {product?.map((product) => (
              <Text style={styles.items_texts}>{product?.hsn}</Text>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>QTY</Text>
            {product?.map((product) => (
              <Text style={styles.items_texts}>{product?.quantity}</Text>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>Unit</Text>
            {product?.map((product) => (
              <Text style={styles.items_texts}>{product?.unit}</Text>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>Rate</Text>
            {product?.map((product) => (
              <Text style={styles.items_texts}>{product?.salePrice}</Text>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>Taxable Value</Text>
            {product?.map((product) => (
              <Text style={styles.items_texts}>{product?.salePrice}</Text>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>CGST</Text>
            {product?.map((product) => (
              <Text style={styles.items_texts}>{product?.cess}%</Text>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid black",
            }}
          >
            <Text style={styles.items_text}>SGST</Text>
            {product?.map((product) => (
              <Text style={styles.items_texts}>{product?.gst}%</Text>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.items_texts_last}>Total</Text>
            {product?.map((product) => (
              <Text style={styles.items_texts_last}>
                {product?.final_price}
              </Text>
            ))}
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 100,
            }}
          >
            <Text style={styles.items_text}>Total Quantity</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 5,
            }}
          >
            <Text style={styles.items_text}>{product?.quantity}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 5,
            }}
          >
            <Text style={styles.items_text}>Taxable amount</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 5,
            }}
          >
            <Text style={styles.items_text}>{totalProductPrice}</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            borderTop: "1px solid black",
            width: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              // border: "1px solid black",
              width: "60%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                minHeight: 50,
              }}
            >
              <Text style={styles.items_text}>Total amount in words</Text>
              <Text style={styles.items_text}>
                {/* {converter.toWords({ totalProductPrice })} */}
              </Text>
              <Text style={styles.items_text}>
                Seven Thousand Three Hundred and Ninety Two Only{" "}
              </Text>
            </View>
            <View
              style={{
                borderRight: "1px solid black",
                borderBottom: "1px solid black",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "40%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Text style={styles.items_Banktext}>Account Holder Name :</Text>
                <Text style={styles.items_Banktext}>Bank Account Number :</Text>
                <Text style={styles.items_Banktext}>Bank IFSC Code :</Text>
                <Text style={styles.items_Banktext}>Bank Name :</Text>
                <Text style={styles.items_Banktext}>Branch Name :</Text>
              </View>
              <View
                style={{
                  width: "60%",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Text style={styles.items_Banktext}>Account Holder Name :</Text>
                <Text style={styles.items_Banktext}>Bank Account Number :</Text>
                <Text style={styles.items_Banktext}>Bank IFSC Code :</Text>
                <Text style={styles.items_Banktext}>Bank Name :</Text>
                <Text style={styles.items_Banktext}>Branch Name :</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                borderRight: "1px solid black",
                borderBottom: "1px solid black",
                width: "100%",
              }}
            >
              <Text style={styles.items_text}>Terms and Conditions :</Text>
              <Text style={styles.items_text}>{termsAndConditions}</Text>
              <Text style={styles.items_text}>
                2. All disputes are subject to BERHAMPORE jurisdiction
              </Text>
              <Text style={styles.items_text}>
                2. All disputes are subject to BERHAMPORE jurisdiction
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottom: "1px solid black",
                width: "100%",
              }}
            >
              <Text style={styles.items_Aligntext}>
                Total Amount Before Tax :
              </Text>
              <Text style={styles.items_Aligntext}>{totalTaxAmount}</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // border: "1px solid black",
                width: "100%",
              }}
            >
              <Text style={styles.items_Aligntext}>Add CGST :</Text>
              <Text style={styles.items_Aligntext}>{totalProductPrice}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottom: "1px solid black",
                width: "100%",
              }}
            >
              <Text style={styles.items_Aligntext}>Add SGST :</Text>

              <Text style={styles.items_Aligntext}>{totalProductPrice}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // borderBottom: "1px solid black",
                width: "100%",
              }}
            >
              <Text style={styles.items_Aligntext}>Round Off Value :</Text>

              <Text style={styles.items_Aligntext}>{totalProductPrice}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottom: "1px solid black",
                width: "100%",
              }}
            >
              <Text style={styles.items_Aligntext}>Total Price :</Text>

              <Text style={styles.items_Aligntext}>{totalProductPrice}</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignContent: "center",
                borderBottom: "1px solid black",
                width: "100%",
                minHeight: 94.5,
              }}
            >
              <View>
                <Text style={styles.items_text}>
                  Certified that the particular given above are true and correct
                </Text>
                <Text style={styles.items_text}>For, SHEERINA ENTERPRISE</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  // alignContent: "center",
                  // border: "1px solid black",
                  width: "100%",
                  // minHeight: 150,
                }}
              >
                <Text style={styles.items_text}>Authorized Signatory</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
