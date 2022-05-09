
import { Grid, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import  "../assets/scss/style.scss";
import UnstyledButtonCustom from "../components/UnstyledButtonCustom";
import { account } from "../services/appwriteConfig";
export default function Signup(){

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: ""
    });

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
                name: "",
                email: "",
                password: ""
            })
        }
        catch(err){
            console.log(err.message);
        }

    }

    return (
        <>
            <Grid 
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid marginTop="30px">
                    <Typography variant="h4">Welcome to Plotwist Community!</Typography>
                </Grid>


                <Grid marginTop="30px">
                    <Typography variant="h5">Username</Typography>
                    <TextField 
                        onChange={(e)=>{
                            setUserDetails({
                                ...userDetails,
                                name: e.target.value
                            })
                        }}  
                        id="standard-basic"  
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
                        id="standard-basic"  
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
                        id="standard-basic"  
                        variant="standard"
                     />
                </Grid>

                <Grid marginTop="30px">
                    <Button onClick={(e)=> signupUser(e)}> <UnstyledButtonCustom value="SignUp"/></Button>
                </Grid>

            </Grid>

        </>
    );
}