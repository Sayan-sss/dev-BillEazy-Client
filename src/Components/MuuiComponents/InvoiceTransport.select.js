import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function TransportSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Select Supply Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
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
