import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ProductSelect() {
  const [discountType, setDiscountType] = React.useState("");

  const handleChange = (event) => {
    setDiscountType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: "0.5rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Discount Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={discountType}
          label="Discount Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Percent Wise</MenuItem>
          <MenuItem value={20}>Value Wise</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
