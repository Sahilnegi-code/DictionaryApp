import React from 'react'

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Header = ({user}) => {
  console.log("user",user);
  return (
    
    <AppBar style ={{backgroundColor:'	rgb(48,48,48)' , marginBottom:'100px' ,padding:"15px"}} position="static">

      <Toolbar style ={{display:'flex' , justifyContent:'center',alignItems:'center'  }} position="fixed"  >
    
    <Typography style ={{color:'orange',  fontWeight:45 ,fontSize:'30px', fontFamily:'Montserrat'}} >
     Crypto {" "}
     <span style={{color:'orange',fontWeight:600 ,fontSize:'35px'}}>
     Search
     </span>
      </Typography>

  
    
   
      </Toolbar>
    </AppBar>
 
  )
}

export default Header