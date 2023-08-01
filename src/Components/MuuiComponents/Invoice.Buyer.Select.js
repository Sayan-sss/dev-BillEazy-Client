import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BuyerSelect() {
  const [gstTreatmentType, setGstTreatmentType] = React.useState("");

  const handleChange = (event) => {
    setGstTreatmentType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: "0.5rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          GST Treatment Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gstTreatmentType}
          label="GST Treatment Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>NONE</MenuItem>
          <MenuItem value={10}>B2B</MenuItem>
          <MenuItem value={20}>SEZWP</MenuItem>
          <MenuItem value={30}>SEZWOP</MenuItem>
          <MenuItem value={30}>EXPWP</MenuItem>
          <MenuItem value={30}>EXPWOP</MenuItem>
          <MenuItem value={30}>DEXP</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
