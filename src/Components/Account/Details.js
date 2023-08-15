import { Box, Button, Divider, TextField } from "@mui/material";
import React from "react";

const Details = () => {
  return (
    <Box sx={{ height: "60vh", width: "50vw" }}>
      <Divider textAlign="left" sx={{ color: "#073259" }}>
        Personal Details
      </Divider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "27vh",
          //   border: "1px solid black",
          width: "50vw",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            width: "20vw",
            height: "27vh",
            justifyContent: "space-evenly",
          }}
        >
          <TextField label="Company Name" variant="outlined" />
          <TextField label="Company Email" variant="outlined" />
          <TextField label="Company Mobile" variant="outlined" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "28vw",
            // border: "1px solid blue",
            alignItems: "center",
            height: "27vh",
          }}
        >
          <TextField
            multiline
            rows={6}
            fullWidth
            label="Company Address"
            variant="outlined"
          />
        </Box>
      </Box>
      <Box
        sx={{
          //   border: "1px solid red",
          height: "10vh",
          width: "50vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
        <TextField label="Pincode" variant="outlined" sx={{ width: "19vw" }} />
        <TextField label="GST No" variant="outlined" sx={{ width: "29vw" }} />
      </Box>
      <Divider textAlign="right" sx={{ color: "#073259" }}>
        Bank Details
      </Divider>
      <Box>
        <Box
          sx={{
            // border: "1px solid red",
            height: "9vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <TextField
            label="Bank Name"
            variant="outlined"
            sx={{ width: "16vw" }}
          />
          <TextField
            label="Account Holder"
            variant="outlined"
            sx={{ width: "17vw" }}
          />
          <TextField
            label="IFSC"
            variant="outlined"
            //   sx={{ width: "29vw" }}
          />
        </Box>
        <Box
          sx={{
            // border: "1px solid red",
            height: "9vh",
            width: "50vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              //   border: "1px solid blue",
              height: "9vh",
              width: "43vw",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Account Number"
              variant="outlined"
              sx={{ width: "18vw" }}
            />
            <TextField
              label="Branch Name"
              variant="outlined"
              sx={{ width: "24vw" }}
            />
          </Box>
          <Button variant="contained" sx={{ background: "#073259" }}>
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
