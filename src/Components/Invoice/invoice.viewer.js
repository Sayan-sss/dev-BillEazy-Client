import React from "react";
import { MyDocument } from "./MyDocument";
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";

export default function InvoiceViewer() {
  const styles = StyleSheet.create({
    pdf: {
      minWidth: "99%",
      minHeight: "93vh",
      overflowX: "hidden",
    },
  });
  return (
    <PDFViewer style={styles.pdf}>
      <MyDocument />
    </PDFViewer>
  );
}
