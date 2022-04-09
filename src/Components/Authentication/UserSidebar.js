import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
// type Anchor = 'top' | 'left' | 'bottom' | 'right';

const  UserSidebar = ({user}) => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  
  return (
    <div>
      {(['right'] ).map((anchor) => (
        <React.Fragment key={anchor}>
        <Avatar 
        onClick={toggleDrawer(anchor , true)}
        src = {user.photoURL}
        alt = {user.displayName}
         />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
         Sahil
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default UserSidebar;