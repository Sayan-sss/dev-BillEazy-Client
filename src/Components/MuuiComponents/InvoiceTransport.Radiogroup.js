import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function InvoiceTransportRadiogroup() {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="none"
        name="radio-buttons-group"
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "1.2rem",
          marginBottom: ".7rem",
        }}
      >
        <FormControlLabel value="none" control={<Radio />} label="none" />
        <FormControlLabel value="road" control={<Radio />} label="Road" />
        <FormControlLabel value="rail" control={<Radio />} label="Rail" />
        <FormControlLabel value="air" control={<Radio />} label="Air" />
        <FormControlLabel
          value="ship"
          control={<Radio />}
          label="Ship / Road cum Ship"
        />
      </RadioGroup>
    </FormControl>
  );
}
