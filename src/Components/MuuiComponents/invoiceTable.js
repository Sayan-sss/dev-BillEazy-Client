import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Invoicetable(props) {
  const { data } = useSelector((state) => state.InvoicesReducer);
  const Product_data = useSelector((state) => state.Invoice_Product_Reducer);
  // const pendingAmount =
  //   Product_data?.data?.Invoice_Product?.product?.final_price -
  //   Product_data?.data?.Invoice_Product?.product?.paid_amount;
  // console.log(pendingAmount);
  const navigate = useNavigate();
  const [status, setStatus] = React.useState("Unpaid");
  // const handlePayment = () => {
  //   console.log("handle");
  // };
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
                <TextField
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                ></TextField>
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                <Button
                  onClick={() => navigate(`/invoice/payment/${invoice?._id}`)}
                >
                  Accept Payment
                </Button>
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
