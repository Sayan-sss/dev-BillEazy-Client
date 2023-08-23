import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    minHeight: "100%",
    display: "flex",
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center',
    // border: "10px solid black",
    // minWidth: "100vw",
  },
  parentContainer: {
    margin: 10,
    // padding: 10,
    flexGrow: 1,
    minWidth: 100,
    // height: "25%",
    display: "flex",
    border: "1px solid black",
  },
  companyDetails: {
    // marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    minHeight: 100,
    textAlign: "right",
    borderBottom: "1px solid black",
    // height: "100%",
  },
  logoContainer: {
    border: "1px solid black",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: "fit-content",
    marginHorizontal: 1,
    paddingHorizontal: 2,
    maxWidth: "25%",
  },
  logo: {
    fontSize: 15,
  },
  companyNameAndAddress: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    width: "75%",
  },
  documentType: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderBottom: "1px solid black",
    backgroundColor: "#062541",
    height: 50,
    color: "white",
  },
  buyerDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",

    // width: "100%",
    // border: "1px solid red",
  },
  buyerDetails_col_1: {
    display: "flex",
    flexDirection: "column",
    width: 100,
    // maxWidth: "60%",
    // borderRight: "1px solid ",
    // borderRightColor: "red",
    // backgroundColor: "red",
  },
  buyerDetails_col_2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    width: "40%",
    maxWidth: "40%",
    borderRight: "1px solid black",
  },
  text: {
    borderBottom: "1px solid black",
    fontSize: 10,
    paddingVertical: 2,
    // textOverflow: "clipped",
    borderRight: "1px solid black",
    maxWidth: 350,
    textAlign: "left",
  },
  priceDetails: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid red",
  },
  price_heading_view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  individual_header_view: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "centre",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  price_details_text: {
    fontSize: 10,
    fontWeight: "ultrabold",
    paddingHorizontal: 2,
  },
  itemsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  individual_items_view: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "centre",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  items_text: {
    fontSize: 10,
    fontWeight: "ultrabold",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textOverflow: "clipped",
  },
});

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.parentContainer}>
        <View style={styles.companyDetails}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>
              Sheerina
              <br />
              Enterprise{" "}
            </Text>
          </View>
          <View style={styles.companyNameAndAddress}>
            <Text>{`Company Name`}</Text>
            <Text>Company Address</Text>
          </View>
        </View>
        <View style={styles.documentType}>
          <Text style={{ fontWeight: "bold" }}>Delivery Challan</Text>
        </View>
        {/* CONSIGNEE DETAILS */}
        <View style={styles.buyerDetails}>
          <View styles={styles.buyerDetails_col_1}>
            <Text style={[{ fontWeight: "bold" }, styles.text]}>
              BUYER DETAILS(DETAILS FOR RECIEVER):
            </Text>
            <Text style={styles.text}>Name : MAGBRO HEALTHCARE PVT.LTD </Text>
            <Text style={styles.text}>
              Address : 218,OM SANTI COMPLEX, INDUSTRIAL AREA COMPLEX , LUDHIANA
              , 141003{" "}
            </Text>
            <Text style={styles.text}>Mobile : 0161-2223063</Text>
            <Text style={styles.text}>GSTIN : </Text>
            <Text style={styles.text}>State : Punjab </Text>
            <Text style={styles.text}>State Code : 03</Text>
          </View>
          <View style={styles.buyerDetails_col_2}>
            <Text style={styles.text}>Challan No : 20234</Text>
            <Text style={styles.text}>Challan Date : 16-Jul-2023</Text>
            <Text style={styles.text}>Place Of Supply: </Text>
            <Text style={styles.text}>State : West Bengal State Code : NA</Text>
            <Text style={styles.text}>Transportation Mode : None</Text>
            <Text style={styles.text}>Transporter Name :</Text>
            <Text style={styles.text}>Vehicle No :</Text>
          </View>
        </View>
        <View style={styles.buyerDetails}>
          <View styles={styles.buyerDetails_col_1}>
            <Text style={[{ fontWeight: "bold" }, styles.text]}>
              CONSIGNEE DETAILS(DETAILS FOR CONSIGNEE):
            </Text>
            <Text style={styles.text}>Name : MAGBRO HEALTHCARE PVT.LTD </Text>
            <Text style={styles.text}>
              Address : 218,OM SANTI COMPLEX, INDUSTRIAL AREA COMPLEX , LUDHIANA
              , 141003{" "}
            </Text>
            <Text style={styles.text}>Mobile : 0161-2223063</Text>
            <Text style={styles.text}>GSTIN : </Text>
            <Text style={styles.text}>State : Punjab </Text>
            <Text style={styles.text}>State Code : 03</Text>
          </View>
          <View style={styles.buyerDetails_col_2}>
            <Text style={styles.text}>Transporter ID :</Text>
            <Text style={styles.text}>LR Number :</Text>
            <Text style={styles.text}>LR Date : 16-07-2023 </Text>
            {/* <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}></Text> */}
          </View>
        </View>
        {/* <View style={styles.priceDetails}>
          <View style={styles.price_heading_view}>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>SL No.</Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>
                Description Of Product
              </Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>HSN Code</Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>QTY</Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>Unit</Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>Rate</Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>Taxable Amt</Text>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>IGST</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={styles.price_details_text}>Rate</Text>
                </View>
                <View>
                  <Text style={styles.price_details_text}>Amt</Text>
                </View>
              </View>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>Total</Text>
            </View>
          </View>
          <View style={styles.itemsRow}>
            <View style={styles.individual_items_view}>
              <Text style={styles.price_details_text}>1</Text>
            </View>
            <View style={styles.individual_items_view}>
              <Text style={styles.price_details_text}>ULSOL-O GEL SYRUP</Text>
            </View>
            <Text style={styles.price_details_text}>3004</Text>
            <View style={styles.individual_items_view}>
              <Text style={styles.price_details_text}>100</Text>
            </View>
            <Text style={styles.price_details_text}>1x200 ml</Text>
            <View style={styles.individual_items_view}>
              <Text style={styles.price_details_text}>22</Text>
            </View>
            <Text style={styles.price_details_text}>2200.00</Text>
            <View style={styles.individual_items_view}>
              <Text style={styles.price_details_text}>12.00% </Text>
            </View>
            <Text style={styles.price_details_text}>264.00</Text>
            <View style={styles.individual_items_view}>
              <Text style={styles.price_details_text}>2,464.00</Text>
            </View>
          </View>
        </View> */}
        <View
          style={{
            width: "100%",
            border: "1px soild black",
          }}
        ></View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.items_text}>SR No.</Text>
            <Text style={styles.items_text}>1</Text>
            <Text style={styles.items_text}>2</Text>
            <Text style={styles.items_text}>3</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 150,
            }}
          >
            <Text style={styles.items_text}>Description Of Product </Text>
            <Text style={styles.items_text}>
              ULSOL-O GEL SYRUPdddddddddddddddddddddddddd{" "}
            </Text>
            <Text style={styles.items_text}>ULSOL-O GEL SYRUP </Text>
            <Text style={styles.items_text}>ULSOL-O GEL SYRUP </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.items_text}>HSN Code</Text>
            <Text style={styles.items_text}>3004</Text>
            <Text style={styles.items_text}>3004</Text>
            <Text style={styles.items_text}>3004</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.items_text}>QTY</Text>
            <Text style={styles.items_text}>100</Text>
            <Text style={styles.items_text}>100</Text>
            <Text style={styles.items_text}>100</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.items_text}>Unit</Text>
            <Text style={styles.items_text}>1x200 ml</Text>
            <Text style={styles.items_text}>1x200 ml</Text>
            <Text style={styles.items_text}>1x200 ml</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.items_text}>Rate</Text>
            <Text style={styles.items_text}>22</Text>
            <Text style={styles.items_text}>22</Text>
            <Text style={styles.items_text}>22</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.items_text}>Taxable Amt</Text>
            <Text style={styles.items_text}>2200.00</Text>
            <Text style={styles.items_text}>2200.00</Text>
            <Text style={styles.items_text}>2200.00</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.items_text}>IGST</Text>
            <Text style={styles.items_text}>12.00%</Text>
            <Text style={styles.items_text}>12.00%</Text>
            <Text style={styles.items_text}>12.00%</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.items_text}>Total</Text>
            <Text style={styles.items_text}>2464.00</Text>
            <Text style={styles.items_text}>2464.00</Text>
            <Text style={styles.items_text}>2464.00</Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            border: "1px soild black",
          }}
        ></View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 100,
            }}
          >
            <Text style={styles.items_text}>Total</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 120,
            }}
          >
            <Text style={styles.items_text}>300</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 98,
            }}
          >
            <Text style={styles.items_text}>6600.00</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 25,
            }}
          >
            <Text style={styles.items_text}>792</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 5,
            }}
          >
            <Text style={styles.items_text}>7392.00</Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            border: "1px soild black",
          }}
        ></View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid black",
            width: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              width: "60%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                borderBottom: "1px solid black",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                minHeight: 100,
              }}
            >
              <Text style={styles.items_text}>Total Amount in words</Text>
              <Text style={styles.items_text}>
                Seven Thousand Three Hundred and Ninety Two Only{" "}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                // border: "1px solid black",
                width: "100%",
              }}
            >
              <Text style={styles.items_text}>Terms and Conditions</Text>
              <Text style={styles.items_text}>
                1. This is an electronically generated document
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
                // border: "1px solid black",
                width: "100%",
              }}
            >
              <Text style={styles.items_text}>Total Taxable Amount :</Text>
              <Text style={styles.items_text}>Rs 6600.00</Text>
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
              <Text style={styles.items_text}>Total GST :</Text>

              <Text style={styles.items_text}>Rs 792.00</Text>
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
              <Text style={styles.items_text}>Total Amount After Tax :</Text>

              <Text style={styles.items_text}>Rs 7392.00</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignContent: "center",
                border: "1px solid black",
                width: "100%",
                minHeight: 150,
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
              s
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
