
import React, { useEffect, useState } from "react";
import { CoinList } from '../config/api';
import axios from "axios";
import { makeStyles } from "@material-ui/core"
import {    Container,  TextField } from "@material-ui/core";
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Cell0 from "../Components/Cell0";
import BodyOfTable  from "../Components/BodyOfTable";
import Header from "../Components/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import LinearProgress from '@mui/material/LinearProgress';

const useStyles = makeStyles
  ({

    App:{
      backgroundColor:'#141618',
    minHeight:'100vh',
    overflowY:'hidden'
    }

  })




const Homepage = () => {
const [coins, setCoins] = useState([]);
const [search, setsearch] = useState("");
const [user,setuser] = useState(null);
const [loading,setloading] = useState(false);
const fetchCoins = async () => {
  setloading(true);
const {data} = await axios.get(CoinList('INR'));
setCoins(data)
setloading(false);
};
useEffect(() => {
fetchCoins();
onAuthStateChanged(auth,user =>{
  if(user){
    setuser(user);
  }
  else{
    setuser("");
  }
})
}, []);

const handleSearch = coins.filter((coin)=>{
   return coin.name.toLowerCase().includes(search.toLowerCase()) ;
      })

    console.log(handleSearch);

const classes = useStyles();
  return (
   
        <div className = {classes.App} >
        < Container  >
        <Header user= {user } />
       
        <TextField
      label="Search For a Crypto Currency..."
      variant = "filled"  
    
      size='medium'
      style ={{ width:"100%" ,marginBottom:20 ,backgroundColor:"white", fontSize:'20px' }}
      onChange={(e)=>setsearch(e.target.value)}
      focused/>

      <TableContainer> 
{
      loading?
      (
        <LinearProgress style ={{backgroundColor:'blue'}} />
      ):
      (
          <Table>
          <TableHead>
           <Cell0 />
         </TableHead>
        <BodyOfTable handleSearch = {handleSearch}/>
          </Table>
      )
}
      </TableContainer>
    
        </Container>
        
        </div>
    )
  
}

export default Homepage