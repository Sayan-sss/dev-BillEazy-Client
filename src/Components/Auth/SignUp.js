import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Divider, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import GoogleBtn from "../Helper/GoogleBtn";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const user = useSelector((state) => state.authReducer);
  // console.log("Reducer user");
  // console.log(user);
  const dispatch = useDispatch();
  // console.log(name);
  // console.log(email);
  // console.log(password);
  const signUp = async () => {
    try {
      const { data } = await API.post("/v1/api/auth/signup", {
        name,
        email,
        password,
      });
      if (data?.success) {
        localStorage.setItem("user", JSON.stringify(data?.user));
        localStorage.setItem("token", JSON.stringify(data?.token));
        dispatch({ type: "AddAuth", payload: data?.user });
        console.log(data);
        navigate("/medicines");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          justifyContent: "center",
          height: "70vh",
          width: "25vw",
          padding: "1rem",
          color: "white",
          borderWidth: "3px",
          borderStyle: "solid",
        }}
      >
        <Box
          sx={{
            color: "#000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // border: "1px solid red",
          }}
        >
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
          <Typography variant="h5">Personal Details</Typography>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                onClick={signUp}
                variant="contained"
                color="success"
                sx={{
                  width: "fit-content",
                  height: "2rem",
                  marginTop: "0.5rem",
                }}
              >
                Sign Up
              </Button>
            </Box>
            {/* <GoogleBtn /> */}
            {/* <Divider textAlign="right" sx={{ marginTop: "2rem" }}>
              Already Have An Account
            </Divider> */}
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
