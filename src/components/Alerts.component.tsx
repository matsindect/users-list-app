import React from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";

interface CustomSnackbarProps {
  open: boolean;
  message: string;
  severity?: AlertColor; // severity can be 'error', 'warning', 'info', 'success'
  autoHideDuration?: number;
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  message,
  severity = "info", // Default severity is 'info'
  autoHideDuration = 4000, // Default autoHideDuration is 4000ms
  onClose,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
