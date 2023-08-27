import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function Invoicetable(props) {
  const { data } = useSelector((state) => state.InvoicesReducer);
  console.log(data);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ color: "white" }}>
          <TableRow
            sx={{
              // borderRight: "10px solid black",
              background: "#073259",
            }}
          >
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell sx={{ color: "white" }} align="center">
              {props.field} No.
            </TableCell>
            <TableCell sx={{ color: "white" }} align="center">
              {props.field} Date
            </TableCell>
            <TableCell sx={{ color: "white" }} align="center">
              BuyerName
            </TableCell>
            <TableCell sx={{ color: "white" }} align="center">
              Status
            </TableCell>
            <TableCell sx={{ color: "white" }} align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.AllInvoice?.map((invoice) => (
            <TableRow
              key={invoice?._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {invoice?.invoiceNo}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {invoice?.invoiceDate}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {invoice?.buyerDetails?.companyName}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                UnPaid
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                <Button>Accept Payment</Button>
              </TableCell>
              {/* <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
