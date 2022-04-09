import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';

import Alert  from '@mui/material/Alert';



const ButtonOfAlert = ({Isopen , setIsopen ,alert,setAlert}) => {


    const handleClose = (  reason ) => {
      setIsopen(false);
      };
     


    console.log(alert);

  return (
      <>
    {
      (
        Isopen
        &&
        <Snackbar style ={{     vertical: 'bottom',
        horizontal: 'center',}} open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.type} sx={{ width: '100%' }}>
          {alert.message} 
        </Alert>
       
      </Snackbar>
        )    
    }
    </>


  )
}

export default ButtonOfAlert