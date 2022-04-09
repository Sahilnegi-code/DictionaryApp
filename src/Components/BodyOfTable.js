
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';

import Cell1 from "./Cell1";



const BodyOfTable = ({handleSearch}) => {
    
  return (
    


    <TableBody>
    {
      handleSearch.map((row)=>
      {
        const profit = row.price_change_percentage_24h.toFixed(2);
        return (
          <TableRow key = {row.name}>
          <Cell1  row = {row }/>


           <TableCell style ={{color:'white',fontWeight:500 , fontFamily:'Montserrat'}}>
           ₹ {row.current_price.toFixed(2)}
           </TableCell>
           <TableCell style ={{color:profit > 0 ? "green":"red" , fontWeight:400 , fontFamily:'Montserrat'}} >
          { profit > 0 ? "+":""   }  {row.price_change_percentage_24h.toFixed(2)} %
           </TableCell>
           <TableCell style ={{color:'white' , fontWeight:500 , fontFamily:'Montserrat'}}>
           ₹  {row.market_cap.toString().slice(0,-6)} 
           </TableCell>

          </TableRow>
        )
      }
      )
    }

    </TableBody>


    
  )
}

export default BodyOfTable