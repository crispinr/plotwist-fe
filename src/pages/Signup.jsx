import { useState } from "react";
import ReactJsAlert from "reactjs-alert";

import { useNavigate } from "react-router-dom";

import { account } from "../services/appwriteConfig";
import UnstyledButtonCustom from "../components/UnstyledButtonCustom";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";

export default function Signup() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

    const [status, setStatus] = useState(false);
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");

    const navigate = useNavigate();

    const signupUser = async(e) => {
        e.preventDefault();
        console.log(userDetails);
        try{

            const newUser = await account.create(
                "unique()",
                userDetails.email, 
                userDetails.password, 
                userDetails.name,
            );
            console.log(newUser);

            setUserDetails({
                name:"",
                email:"",
                password:""
            });
            setStatus(true);
            setType("success");
            setTitle("User created");

            navigate('/login');
            
        }
        catch(err){
            console.log(err.message);

            setUserDetails({
                name:"",
                email:"",
                password:""
            });

            setStatus(true);
            setType("error");
            setTitle(err.message);
        }
    }

    

  return (
    <>
      <ReactJsAlert
        status={status}
        type={type}
        title={title}
        Close={() => setStatus(false)}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <Grid marginTop="30px">
            <Typography variant="h4">Welcome to Plotwist Community!</Typography>
          </Grid>

          <Grid marginTop="30px">
            <Typography variant="h5">Name</Typography>
            <TextField
              fontSize="20px"
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  name: e.target.value,
                });
              }}
              value={userDetails.name}
              id="username"
              variant="standard"
              required
            />
          </Grid>

          <Grid marginTop="30px">
            <Typography variant="h5">Email</Typography>
            <TextField
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
            <Button onClick={(e) => signupUser(e)}>
              {" "}
              <UnstyledButtonCustom value="SignUp" />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
