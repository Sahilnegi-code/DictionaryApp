
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button';
import Button from '@mui/material/Button';
import  { useEffect, useState } from "react";
import  ButtonOfAlert from '../ButtonOfAlert';

import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const SignUp = ({handleClose}) => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [Isopen, setIsopen] = useState(false);
    const [Alert, setAlert] = useState({});
const handleSubmit= async()=>{
  if(password !== confirmpassword){
    console.log(password,confirmpassword); 
    setAlert({
      open: true,
      message: "Passwords do not match",
      type: "error",
      
    });
    setIsopen(true);
    return;
  }
  try{
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(result);  
    setAlert({
      open: true,
      message: `Sign Up Successful. Welcome   ${result.user.email}`,
      type: "success",
      
    });
  setIsopen(true);


  }
  catch(err){
    setAlert({
      open: true,
      message: err.message,
      type: "error",
      
    });
    setIsopen(true);
  }
    return;  
}
console.log(Isopen,"==>")
  return (
   
    <>
    <div>
    <ButtonOfAlert Isopen ={Isopen} setIsopen={setIsopen} alert ={Alert} setAlert ={setAlert}/>
    </div>
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
    <TextField
      id=""
      type ="password"
      variant='outlined'
      label="Confirm Password"
      value={confirmpassword}
      onChange={(e)=>setconfirmpassword(e.target.value)}
      fullWidth
    />
    <Button variant = "contained" onClick={handleSubmit} >
      Sign Up
    </Button>
    </Box>
    </>
  )


  }


export default SignUp