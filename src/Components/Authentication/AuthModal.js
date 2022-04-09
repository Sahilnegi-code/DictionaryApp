import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Login from './Login'
import SignUp from './SignUp'
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs'
const style = {
  position: 'absolute',
  top: '50%',

  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const  AuthModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };   
  console.log(value); 
  return (
    <div>
      <Button style ={{background:'white'}} onClick={handleOpen}>LOGIN</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} >          
            <Tab label="Login"  />
            <Tab label="Sign Up"  />
            </Tabs>
          { value===0 && <Login handleClose={handleClose}/> }
          { value === 1 && <SignUp handleClose={handleClose}/>}
        </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AuthModal;