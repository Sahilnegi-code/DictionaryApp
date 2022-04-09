import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button';
import  { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import ButtonOfAlert from '../ButtonOfAlert'
const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [Alert, setAlert] = useState({});
  const [Isopen, setIsopen] = useState(false);


const handleSubmit = async()=>{
  if(!email || !password){
      setAlert({
        open: true,
        message: "Please fill all the Fields",
        type: "error",
      }
    )   
    setIsopen(true);
    return; 
  }

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    setAlert({
      open: true,
      message: `Sign Up Successful. Welcome ${result.user.email}`,
      type: "success",
    });
    setIsopen(true);
    return;
}
catch(error){

  setAlert({
    open: true,
    message: error.message,
    type: "error",
  });
  setIsopen(true);
  return;

}

}
  return (
    
    <>

    <ButtonOfAlert Isopen ={Isopen} setIsopen={setIsopen} alert ={Alert} setAlert ={setAlert}/>


    <Box p={3} style ={{display:'flex',flexDirection:'column' ,gap:'20px',width:'100%'}}>
    <TextField
      id=""
      label="Enter Email"
      value={email}
      onChange={(e)=>setemail(e.target.value)}
      variant='outlined'
      type ="email"
      fullWidth
    />
    <TextField
      id=""
      type ="password"
      variant='outlined'
      label="Enter Password"
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      fullWidth
    />
  
    <Button variant = "contained" onClick={handleSubmit} >
      Sign Up
    </Button>
    </Box>
    </>
  )
}

export default Login