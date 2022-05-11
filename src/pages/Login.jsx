import React, { useState } from "react";
import { account } from "../services/appwriteConfig";
import { useNavigate } from "react-router-dom";
import ReactJsAlert from "reactjs-alert";
import UnstyledButtonCustom from "../components/UnstyledButtonCustom";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    try {
      const loggedUser = await account.createSession(
        userDetails.email,
        userDetails.password
      );
      console.log(loggedUser);
      setStatus(true);
      setType("success");
      setTitle("Logged in");
      navigate("/feed");
    } catch (err) {
      console.log(err);
      setStatus(true);
      setType("error");
      setTitle("Invalid Password or email");
    }
  };

  return (
    <>
      <ReactJsAlert
        status={status}
        type={type}
        title={title}
        Close={() => setStatus(false)}
      />
      <div className="auth-wrapper">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          backgroundColor="#1c223a"
          color="#FFFFFF"
        >
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <Grid marginTop="30px">
              <Typography variant="h4">
                Welcome to Plotwist Community!
              </Typography>
            </Grid>

            <Grid marginTop="30px">
              <Typography variant="h5">Email</Typography>
              <TextField
                borderColor="#FFFFFF"
                fontSize="30px"
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                  });
                }}
                className="textfield"
                id="email"
                value={userDetails.email}
                variant="standard"
                fullWidth
                required
              />
            </Grid>

            <Grid marginTop="30px">
              <Typography variant="h5">Password</Typography>
              <TextField
                fontSize="20px"
                type="password"
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                  });
                }}
                value={userDetails.password}
                id="password"
                variant="standard"
                required
              />
            </Grid>

            <Grid marginTop="30px">
              <div class="col-md-12 text-center">
                <Button onClick={(e) => loginUser(e)}>
                  {" "}
                  <UnstyledButtonCustom value="Log In" />
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
