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
import InvoiceTransportRadiogroup from "./InvoiceTransport.Radiogroup";
import DatePicker from "./InvoiceTransport.Datepicker";
import TransportSelect from "./InvoiceTransport.select";
import { Box } from "@mui/material";

export default function InvoiceTransport(props) {
  const [open, setOpen] = React.useState(false);
  const [lrnumber, setLrnumber] = React.useState("");
  const [placeofsupply, setPlaceofsupply] = React.useState("");
  const [vehiclenumber, setVehiclenumber] = React.useState("");

  //   const [companyPan, setCompanyPan] = React.useState("");
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
        <DialogTitle
          sx={{
            height: "2rem",
            backgroundColor: "#363740",
            color: "#ffffff",
            fontFamily: "Roboto",
          }}
        >
          TRANSPORT DETAILS
        </DialogTitle>

        <DialogContent>
          <InvoiceTransportRadiogroup />

          <DatePicker name={"LR Date"} />
          <TextField
            autoFocus
            margin="dense"
            id="lrnumber"
            label="LR Number"
            type="number"
            fullWidth
            variant="outlined"
            value={lrnumber}
            onChange={(e) => setLrnumber(e.target.value)}
          />
          <DatePicker name={"Date of Supply"} />
          <TextField
            autoFocus
            margin="dense"
            id="placeofsupply"
            label="Place Of Supply"
            type="text"
            fullWidth
            variant="outlined"
            value={placeofsupply}
            onChange={(e) => setPlaceofsupply(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="vehiclenumber"
            label="Vehicle Number"
            type="number"
            fullWidth
            variant="outlined"
            value={vehiclenumber}
            onChange={(e) => setVehiclenumber(e.target.value)}
          />
          <TransportSelect />
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
