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
// import InvoiceProductsRadioGroup from "./InvoiceProduct.Radiogroup";
// import ProductSelect from "./Invoice.Product.DiscountSelect";
import ProductGSTselect from "./Invoice.Product.GstSelect";
import Select from "./Invoice.Product.Select";
import { Box } from "@mui/material";
import useInvoiceApis from "../hooks/invoice.hooks";
import { useSelector } from "react-redux";
// import ProductSelect_discount_type from "./Invoice.Product.DiscountSelect";
import Invoice_Products_Tax_RadioGroup from "./InvoiceProduct.Radiogroup";
import Product_discount_type_Select from "./Invoice.Product.DiscountSelect";
import Select_Percent_Wise_Product from "./Invoice.Product.Select";
import Tooltip from "@mui/material/Tooltip";

export default function InvoiceProduct(props) {
  const { addProductDetails } = useInvoiceApis();
  const [open, setOpen] = React.useState(false);
  const [itemName, setItemName] = React.useState("");
  const [itemDescription, setItemDescription] = React.useState("");
  const [hsn, setHsn] = React.useState("");
  const [quantity, setQuantity] = React.useState();
  const [unit, setUnit] = React.useState();
  const [salePrice, setSalePrice] = React.useState();
  const [gst, setGst] = React.useState(0);
  const [cess, setCess] = React.useState();
  const [discount, setDiscount] = React.useState();
  const [discountType, setDiscountType] = React.useState("Percent Wise");
  const [taxType, setTaxType] = React.useState("Inclusive");
  const User = useSelector((state) => state.authReducer);
  // console.log("Reducer user");
  const { user } = User;
  // console.log(gst);
  // console.log(discount);
  // console.log(taxType);
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
  const handleSubmit = async () => {
    addProductDetails({
      itemName,
      itemDescription,
      hsn,
      quantity,
      unit,
      salePrice,
      discount,
      discountType,
      cess,
      gst,
      taxType,
      userId: user._id,
    });
    handleClose();
  };
  return (
    <div>
      <Tooltip title="Add New">
        <EditIcon
          onClick={handleClickOpen}
          sx={{ marginRight: "2rem", cursor: "pointer" }}
        />
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            height: "2rem",
            backgroundColor: "#073259",
            color: "#ffffff",
            fontFamily: "Roboto",
            mb: "1.5rem",
          }}
        >
          ADD PRODUCT
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="itemName"
            label="Item Name"
            type="name"
            fullWidth
            variant="outlined"
            value={itemName}
            onChange={(e) => setItemName(e.target.value.toUpperCase())}
          />
          <TextField
            autoFocus
            margin="dense"
            id="itemDescription"
            label="Item Description"
            type="name"
            fullWidth
            variant="outlined"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value.toUpperCase())}
          />
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
              id="hsn"
              label="HSN"
              type="name"
              sx={{
                width: "60%",
              }}
              // fullWidth
              variant="outlined"
              value={hsn}
              onChange={(e) => setHsn(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="quantity"
              label="Quantity"
              type="number"
              sx={{
                width: "38%",
              }}
              // fullWidth
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
              id="unit"
              label="Unit"
              type="number"
              sx={{
                width: "32%",
              }}
              // fullWidth
              variant="outlined"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="salePrice"
              label="Sale Price"
              type="number"
              sx={{
                width: "32%",
              }}
              // fullWidth
              variant="outlined"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="discount"
              label="Discount"
              type="number"
              sx={{
                width: "32%",
              }}
              // fullWidth
              variant="outlined"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </Box>
          <Product_discount_type_Select
            discountType={discountType}
            setDiscountType={setDiscountType}
          />

          <Invoice_Products_Tax_RadioGroup
            taxType={taxType}
            setTaxType={setTaxType}
          />
          <ProductGSTselect gst={gst} setGst={setGst} />
          {/* <TextField
            autoFocus
            margin="dense"
            id="gst"
            label="GST"
            type="name"
            fullWidth
            variant="outlined"
            value={gst}
            onChange={(e) => setGst(e.target.value)}
          /> */}
          <TextField
            autoFocus
            margin="dense"
            id="cess"
            label="CESS (Applied on Tax Value)"
            type="number"
            fullWidth
            variant="outlined"
            value={cess}
            onChange={(e) => setCess(e.target.value)}
          />
          <Select_Percent_Wise_Product />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Toaster />
    </div>
  );
}
