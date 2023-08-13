import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Divider, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InsideMedicineContainer from "../Medicine/InsideMedicineContainer";

export default function Login() {
  // const isLoginPage = true; // Change this to false if you're not on the login page
  // const sidebar = document.querySelector(".sidebar");

  // sidebar.style.display = isLoginPage ? "none" : "block";
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "10rem",
        // border: "2px solid red",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <Paper
        elevation={16}
        sx={{
          display: "flex",
          height: "60vh",
          width: "25vw",
          padding: "1rem",
          color: "white",
          borderWidth: "3px",
          borderStyle: "solid",
        }}
      >
        <Box sx={{ color: "blue" }}>
          {/* <Typography
            variant="h6"
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "25vw",
              marginTop: "1rem",
              color: "blue",
            }}
          >
            Welcome to virus
          </Typography> */}
          {/* <Divider variant="middle" color="black" /> */}
          <Divider
            fullWidth
            textAlign="right"
            sx={{ width: "25vw", marginTop: "2rem" }}
          >
            Welcome to Virus
          </Divider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // marginTop: "1rem",
            }}
          >
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="normal"
              required
              type="email"
              color="primary"
              placeholder="Enter your email"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              color="primary"
              type="password"
              required
              placeholder="Enter your password"
              // sx={{ marginTop: "1rem" }}
              margin="normal"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={() => navigate("/medicines")}
                variant="contained"
                color="success"
                sx={{ width: "6vw", height: "2rem", marginTop: "0.5rem" }}
              >
                Log In
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ width: "11vw", height: "2rem", marginTop: "0.5rem" }}
              >
                Forgot Password
              </Button>
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "25vw", height: "2rem", marginTop: "1rem" }}
            >
              Log In With Google
            </Button>
            <Divider textAlign="right" sx={{ marginTop: "2rem" }}>
              Don't Have An Account
            </Divider>
            <Box sx={{ display: "flex", width: "25vw", flexDirection: "row" }}>
              <Typography
                variant="button"
                gutterBottom
                sx={{
                  display: "flex",
                  // justifyContent: "center",
                  width: "15vw",
                  marginTop: "2rem",
                  color: "blue",
                }}
              >
                Create New Account
              </Typography>
              <Button
                onClick={() => navigate("/SignUp")}
                variant="contained"
                color="secondary"
                sx={{ width: "10vw", height: "2rem", marginTop: "2rem" }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
