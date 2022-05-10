
import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import  "../assets/scss/style.scss";
import UnstyledButtonCustom from "../components/UnstyledButtonCustom";
import { account } from "../services/appwriteConfig";
import ReactJsAlert from "reactjs-alert";

export default function Signup(){

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [status, setStatus] = useState(false);
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");

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
            
        }
        catch(err){
            console.log(err.message);

            setStatus(true);
            setType("error");
            setTitle(err.message);
        }

    }

    return (
        <>
        <ReactJsAlert
            status={status} // true or false
            type={type} // success, warning, error, info
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
                        onChange={(e)=>{
                            setUserDetails({
                                ...userDetails,
                                name: e.target.value
                            })
                        }}  
                        value={userDetails.name}
                        id="username"  
                        variant="standard" />
                </Grid>

                <Grid marginTop="30px">
                    <Typography variant="h5">Email</Typography>
                    <TextField 
                        onChange={(e)=>{
                            setUserDetails({
                                ...userDetails,
                                email: e.target.value
                            })
                        }}
                        className="textfield"
                        id="email"  
                        value={userDetails.email}
                        variant="standard" 
                        fullWidth
                    />
                </Grid>

                <Grid marginTop="30px">
                    <Typography variant="h5">Password</Typography>
                    <TextField 
                        type="password"
                        onChange={(e)=>{
                            setUserDetails({
                                ...userDetails,
                                password: e.target.value
                            })
                        }}
                        value={userDetails.password}
                        id="password"  
                        variant="standard"
                     />
                </Grid>

                <Grid marginTop="30px">
                    <Button onClick={(e)=> signupUser(e)}> <UnstyledButtonCustom value="SignUp"/></Button>
                </Grid>

            </Grid>

        </Box>
    
        </>
    );
}