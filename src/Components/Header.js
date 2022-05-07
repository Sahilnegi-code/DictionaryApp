import React from 'react'
import './Header.css'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import categories from '../Data/category';

const darkTheme = createTheme({
  palette: {
      primary:{
main:'#fff',
      },

    mode: 'dark',
  },
});

const Header = ({category,setcategory, word , setword}) => {
   const handleChange=(lang)=>{
     setcategory(lang);
     setword("");
   }
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
  <TextField
  className = "language"
  select
  label = "Language"
  value ={category}
  onChange={(e)=> handleChange(e.target.value) }

>
  {
      categories.map((option)=>{
          return (
            <MenuItem style ={{ fontFamily:'Montserrat'}} key={option.label} value = {option.label} >
            {option.value}
          </MenuItem>
          
          )
      })
  }
  
 
</TextField>




  </ThemeProvider>
  </div>
    </div>
  )
}

export default Header;