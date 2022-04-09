import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
const Cell0 = ({head}) => {
  return (
    <TableRow style ={{backgroundColor:'gold' }}>
    {

      ["Coin","Price","24th Change","Market Cap"].map((head)=>
       (
        <TableCell key = {head} style ={{ fontFamily:"Montserrat" , fontWeight:800}}>
        {head}
        </TableCell>
      
      ))
    }



   </TableRow>
  )
}

export default Cell0