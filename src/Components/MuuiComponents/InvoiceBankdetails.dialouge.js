import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { toast, Toaster } from "react-hot-toast";
import API from "../../api";
import EditIcon from "@mui/icons-material/Edit";
import InvoiceTextField from "./Invoice.textField";
import InvoiceProductsRadioGroup from "./InvoiceProduct.Radiogroup";

export default function InvoiceProduct(props) {
  const [open, setOpen] = React.useState(false);
  const [accountholdername, setAccountholdername] = React.useState("");
  const [accountnumber, setAccountnumber] = React.useState("");
  const [ifsc, setIfsc] = React.useState("");
  const [bankname, setBankname] = React.useState("");
  const [branchname, setBranchname] = React.useState("");

  //   const [companyPan, setCompanyPan] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };

  return (
    <div>
      <EditIcon
        onClick={handleClickOpen}
        sx={{ marginRight: "2rem", cursor: "pointer" }}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            height: "2rem",
            backgroundColor: "#363740",
            color: "#ffffff",
            fontFamily: "Roboto",
          }}
        >
          Add New Buyer
        </DialogTitle>
        <DialogContent sx={{ marginTop: "2rem" }}>
          <TextField
            autoFocus
            margin="dense"
            id="accountholdername"
            label="Account Holder Name"
            type="text"
            fullWidth
            variant="outlined"
            value={accountholdername}
            onChange={(e) => setAccountholdername(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="accountnumber"
            label="Account Number"
            type="text"
            fullWidth
            variant="outlined"
            value={accountnumber}
            onChange={(e) => setAccountnumber(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="ifsc"
            label="Enter IFSC number"
            type="number"
            fullWidth
            variant="outlined"
            value={ifsc}
            onChange={(e) => setIfsc(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="bankname"
            label="Enter Bank Name"
            type="number"
            fullWidth
            variant="outlined"
            value={bankname}
            onChange={(e) => setBankname(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="branchname"
            label="Enter Branch Name"
            type="number"
            fullWidth
            variant="outlined"
            value={branchname}
            onChange={(e) => setBranchname(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button>Save</Button>
        </DialogActions>
      </Dialog>
      <Toaster />
    </div>
  );
}