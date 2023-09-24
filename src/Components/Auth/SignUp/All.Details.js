import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import Details from "../../Account/Details";
import logo from "../../Assets/icon.png";
import { useNavigate } from "react-router-dom";

export default function AllDetails() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        //   flexWrap: 'wrap',
        //   '& > :not(style)': {
        //     m: 1,
        //     width: 128,
        //     height: 128,
        //   },
        height: "100vh",
        width: "85vw",
        // border: "1px solid red",
      }}
    >
      <Paper elevation={16} sx={{ height: "90%", width: "90%" }}>
        <Box
          sx={{
            border: "1.5px solid #073259",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              //   border: "1px solid red",
              height: "10%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Divider
              fullWidth
              textAlign="right"
              sx={{ width: "100%", color: "#073259" }}
            >
              Welcome to BillEazy
            </Divider>
          </Box>

          <Box
            sx={{
              //   border: "1px solid red",
              height: "90%",
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-around",
              flexDirection: "row",
              mt: "2rem",
            }}
          >
            <Box
              sx={{
                // border: "1px solid red",
                height: "55%",
                width: "25%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "column",
                mt: "2rem",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  border: "1px solid #073259",
                  height: "75%",
                  width: "80%",
                  borderRadius: "5px",
                  //   mt: "2rem",
                }}
              >
                <img src={logo} height={"100%"} width={"100%"} alt="" />
              </Paper>
              <Box
                sx={{
                  height: "10%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ width: "60%", background: "#073259" }}
                >
                  Upload
                </Button>
              </Box>
            </Box>
            <Box sx={{ height: "70%", width: "65%" }}>
              <Details />
            </Box>
          </Box>
          <Box
            sx={{
              //   border: "1px solid red",
              height: "20%",
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              mt: "1.5rem",
            }}
          >
            <Button
              variant="contained"
              sx={{ background: "#073259", mr: "5rem", width: "20%" }}
              onClick={() => navigate("/Pricing")}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
