import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './SnackBar.sass';

const SnackBar = ({ message, isOpen, hideNotification }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isOpen}
    onClose={hideNotification}
    autoHideDuration={2000}
  >
    <MuiAlert
      className="alert"
      elevation={6}
      variant="standard"
      onClose={hideNotification}
      severity="success"
    >
      {message}
    </MuiAlert>
  </Snackbar>
);

export default SnackBar;
