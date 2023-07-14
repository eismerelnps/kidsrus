import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

export default function SimpleBackdrop( {open, setOpen, children} ) {
  //const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
      { children}
        
      
      </Backdrop>
    </div>
  );
}