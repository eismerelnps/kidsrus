import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";

export default function AbstractDialog({
  title,
  description,
  dialogOpen,
  setDialogOpen,
  dialogButtons,
}) {
  //   const [open, setOpen] = React.useState(false);
  //const theme = useTheme();
  //const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Dialog
        //fullScreen={fullScreen}
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {dialogButtons.map(({ text, fun }) => (
            <Button autoFocus onClick={fun}>
              {text}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    </div>
  );
}
