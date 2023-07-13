import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box } from "@mui/material";
import { BestSellers } from "../newArrivals/bestsellers/BestSellers";

export default function AlertDialog({ title, description, open, setOpen }) {
  //const [open, setOpen] = React.useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* //   <DialogTitle id="alert-dialog-title">
      //     {title}
      //   </DialogTitle> */}

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <BestSellers title={title} products={description} />
          </DialogContentText>
        </DialogContent>
        <Box sx={{ display: "flex" }}>{/* <CircularProgress /> */}</Box>

        {/* 
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
