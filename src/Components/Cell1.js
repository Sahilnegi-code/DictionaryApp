import React from 'react'
import TableCell from '@mui/material/TableCell';

const Cell1 = ({row}) => {
 
  return (
    <TableCell  style={{color:'white' ,  display:'flex' }}>

    <img src={row.image} style ={{height:'50px' ,marginRight:'10px'}} alt="" />

    <div style ={{display:'flex' , flexDirection:'column' , padding:'12px',justifyContent:'center'}}>

    <span>  
    {row.name}
    </span>

    <span style ={{fontFamily:'Montserrat' , fontSize:'26px'}}>
    {row.symbol}
    </span>

     </div>

     </TableCell>
  )
}

export default Cell1;