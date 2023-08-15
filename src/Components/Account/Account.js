import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Account() {
  return (
    <Box
    //   sx={{
    //     display: "flex",
    //     flexWrap: "wrap",
    //     "& > :not(style)": {
    //       m: 1,
    //       alignItems: "center",
    //       justifyContent: "center",
    //     },
    //   }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90vw",
          height: "90vh",
        }}
      />
    </Box>
  );
}
