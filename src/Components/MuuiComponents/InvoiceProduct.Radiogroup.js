import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function InvoiceProductsRadioGroup() {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="taxinvoice"
        name="radio-buttons-group"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <h4>Select Tax Type</h4>
        <FormControlLabel
          value="taxinvoice"
          control={<Radio />}
          label="Inclusive 0.00/ per unit"
        />
        <FormControlLabel
          value="billofsupply"
          control={<Radio />}
          label="Exclusive   0/ per unit"
        />
      </RadioGroup>
    </FormControl>
  );
}
