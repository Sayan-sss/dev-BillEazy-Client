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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import API from "../../api";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Container } from "@mui/material";

export default function AddMedDialouge(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [hsn, setHsn] = React.useState("");
  const [rate, setRate] = React.useState("");
  const [mrp, setMrp] = React.useState("");
  const [expiry, setExpiry] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

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
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
      >
        ADD MEDICINE
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Medicine</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add new medicines to your inventory
          </DialogContentText>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="MEDICINE NAME"
              type="name"
              sx={{
                width: "70%",
              }}
              // fullWidth
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value.toUpperCase())}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label=" QUANTITY"
              type="number"
              // fullWidth
              sx={{
                width: "28%",
              }}
              variant="outlined"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="HSN"
              type="String"
              // fullWidth
              sx={{
                width: "52%",
              }}
              variant="outlined"
              value={hsn}
              onChange={(e) => setHsn(e.target.value.toUpperCase())}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="RATE"
              type="Number"
              // fullWidth
              variant="outlined"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="mrp"
              label="MRP"
              type="Number"
              // width
              sx={{
                width: "52%",
              }}
              variant="outlined"
              value={mrp}
              onChange={(e) => setMrp(e.target.value)}
            />
            {/* <TextField
            autoFocus
            margin="dense"
            id="expiry"
            label="EXPIRY"
            type=""
            fullWidth
            variant="outlined"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          /> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{
                  width: "46%",
                }}
              >
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  // value={expiry}
                  label="EXPIRY DATE"
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={handleSubmit}>SAVE</Button>
        </DialogActions>
      </Dialog>
      <Toaster />
    </div>
  );
}
