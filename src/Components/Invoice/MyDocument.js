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
    border: "1px solid red",
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
    flexDirection: "row",
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
    flexDirection: "row",
    alignItems: "centre",
    padding: 5,
  },
  price_details_text: {
    fontSize: 10,
    fontWeight: "ultrabold",
    paddingHorizontal: 2,
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
          <Text style={{ fontWeight: "bold" }}>Invoice</Text>
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
        <View style={styles.priceDetails}>
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
              <View>
                <Text style={styles.price_details_text}>Rate</Text>
              </View>
              <View>
                <Text style={styles.price_details_text}>Amt</Text>
              </View>
            </View>
            <View style={styles.individual_header_view}>
              <Text style={styles.price_details_text}>Total</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
