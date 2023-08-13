import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Divider, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "5rem",
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
          height: "70vh",
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
              label="Name"
              variant="outlined"
              margin="normal"
              required
              type="text"
              color="primary"
              placeholder="Enter your Name"
            />
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
                // flexDirection: "row",
                // justifyContent: "space-between",
                justifyContent: "flex-end",
              }}
            >
              <Button
                onClick={() => navigate("/medicines")}
                variant="contained"
                color="success"
                sx={{ width: "6vw", height: "2rem", marginTop: "0.5rem" }}
              >
                Sign Up
              </Button>
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "25vw", height: "2rem", marginTop: "1rem" }}
            >
              Sign Up With Google
            </Button>
            <Divider textAlign="right" sx={{ marginTop: "2rem" }}>
              Already Have An Account
            </Divider>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "25vw",
                flexDirection: "row",
              }}
            >
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
                Log In with Existing Account
              </Typography>
              <Button
                onClick={() => navigate("/Login")}
                variant="contained"
                color="secondary"
                sx={{ width: "8vw", height: "2rem", marginTop: "2rem" }}
              >
                Log In
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
