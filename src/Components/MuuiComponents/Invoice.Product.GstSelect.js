import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ProductGSTselect() {
  const [gstType, setGstType] = React.useState("");

  const handleChange = (event) => {
    setGstType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: "0.5rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">GST(%)</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="gst"
          value={gstType}
          label="GST(%)"
          onChange={handleChange}
        >
          <MenuItem value={10}>No GST</MenuItem>
          <MenuItem value={20}>GST @ 0%</MenuItem>
          <MenuItem value={30}>Exempted</MenuItem>
          <MenuItem value={40}>GST @ 0.1%</MenuItem>
          <MenuItem value={50}>GST @ 0.25%</MenuItem>
          <MenuItem value={60}>GST @ 1.5%</MenuItem>
          <MenuItem value={70}>GST @ 3%</MenuItem>
          <MenuItem value={100}>GST @ 5%</MenuItem>
          <MenuItem value={110}>GST @ 6%</MenuItem>
          <MenuItem value={120}>GST @ 12%</MenuItem>
          <MenuItem value={130}>GST @ 14%</MenuItem>
          <MenuItem value={140}>GST @ 18%</MenuItem>
          <MenuItem value={150}>GST @ 28%</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
