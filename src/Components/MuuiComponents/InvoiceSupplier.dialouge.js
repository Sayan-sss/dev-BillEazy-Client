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

export default function InvoiceDialouge(props) {
  const [open, setOpen] = React.useState(false);
  const [firmname, setFirmName] = React.useState("");
  const [companyGSTIN, setCompanyGSTIN] = React.useState("");
  const [companyAddress, setCompanyAddress] = React.useState("");
  const [companyMobile, setCompanyMobile] = React.useState("");
  const [state, setState] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [companyemail, setCompanyemail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [companyPan, setCompanyPan] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };
  //   const handleSubmit = async () => {
  //     try {
  //       const { data } = await API.post("/api/medicine/addmedicine", {
  //         name,
  //         quantity,
  //         price,
  //       });

  //       if (data?.success) {
  //         toast.success("Successfully product added");
  //         props.getAllMedicines();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("Something went Wrong");
  //     }

  //     handleClose();
  //   };
  return (
    <div>
      <EditIcon
        onClick={handleClickOpen}
        sx={{ marginRight: "2rem", cursor: "pointer" }}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Medicine</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add new medicines to your inventory
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="firmname"
            label="Firmname"
            type="name"
            fullWidth
            variant="outlined"
            value={firmname}
            onChange={(e) => setFirmName(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="companyGSTIN"
            label="Company GSTIN"
            type="text"
            fullWidth
            variant="outlined"
            value={companyGSTIN}
            onChange={(e) => setCompanyGSTIN(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="companyAddress"
            label="Ccompany Address"
            type="text"
            fullWidth
            variant="outlined"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="companyMobile"
            label="Company Mobile"
            type="number"
            fullWidth
            variant="outlined"
            value={companyMobile}
            onChange={(e) => setCompanyMobile(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="State"
            label="State"
            type="text"
            fullWidth
            variant="outlined"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="pincode"
            label="Pincode"
            type="text"
            fullWidth
            variant="outlined"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="companyemail"
            label="Companyemail"
            type="email"
            fullWidth
            variant="outlined"
            value={companyemail}
            onChange={(e) => setCompanyemail(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="companyemail"
            label="Companyemail"
            type="email"
            fullWidth
            variant="outlined"
            value={companyemail}
            onChange={(e) => setCompanyemail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="city"
            label="City"
            type="email"
            fullWidth
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="companyPan"
            label="CompanyPan"
            type="email"
            fullWidth
            variant="outlined"
            value={companyPan}
            onChange={(e) => setCompanyPan(e.target.value)}
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
