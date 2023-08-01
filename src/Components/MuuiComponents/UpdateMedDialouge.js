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
import { Box } from "@mui/material";

export default function UpdateMedDialouge(props) {
  const [open, setOpen] = React.useState(props);
  const [name, setName] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [hsn, setHsn] = React.useState("");
  const [rate, setRate] = React.useState("");
  const [mrp, setMrp] = React.useState("");
  const [expiry, setExpiry] = React.useState("");

  // const handleClickOpen = () => {
  //   setOpen(props.open);
  // };

  const handleClose = async () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    try {
      const { data } = await API.post("/api/medicine/addmedicine", {
        name,
        quantity,
        rate,
        mrp,
        hsn,
        expiry,
      });

      if (data?.success) {
        toast.success("Successfully product added");
        props.getAllMedicines();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }

    handleClose();
  };
  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Medicine</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add new medicines to your inventory
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Medicine Name"
            type="name"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            label=" QUANTITY"
            type="number"
            fullWidth
            variant="outlined"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="hsn"
            label="HSN"
            type="number"
            fullWidth
            variant="outlined"
            value={hsn}
            onChange={(e) => setHsn(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="rate"
            label="RATE"
            type="Number"
            fullWidth
            variant="outlined"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="mrp"
            label="MRP"
            type="Number"
            fullWidth
            variant="outlined"
            value={mrp}
            onChange={(e) => setMrp(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="expiry"
            label="EXPIRY"
            type="Date"
            fullWidth
            variant="outlined"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
      <Toaster />
    </Box>
  );
}
