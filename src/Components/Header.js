import React from 'react';
import './Header.css';
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
      primary:{
main:'#fff',
      },

    mode: 'dark',
  },
});

const Header = ({ word , setword}) => {
 
  return (
    <div className = "header" >
    <div className="title" style ={{backgroundColor:'rgb(48,48,48)', border:'2px solid rgb(48,48,48) '}}>
    <span className='heading' style={{color:'orange' , fontWeight:500}} >
    Dict
    <span style={{color:'orange',fontWeight:600 ,fontSize:'60%'}}>
    ionary
    </span>
     
     </span>  
    </div>
  <div className='inputs'>  
  <ThemeProvider theme={darkTheme}>
  <TextField
  className = "search"
  label="Search"  
  value ={word}
  onChange={(e)=> setword(e.target.value) }
  />
  </ThemeProvider>
  </div>
    </div>
  )
}

export default Header;
