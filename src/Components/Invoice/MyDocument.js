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
    borderBottom: "1px solid red",
    // height: "100%",
  },
  documentType: {},
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
});

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.parentContainer}>
        <View style={styles.companyDetails}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>Logo</Text>
          </View>
          <View style={styles.companyNameAndAddress}>
            <Text>{`Company Name`}</Text>
            <Text>Company Address</Text>
          </View>
        </View>
        <View style={styles.documentType}></View>
      </View>
    </Page>
  </Document>
);
