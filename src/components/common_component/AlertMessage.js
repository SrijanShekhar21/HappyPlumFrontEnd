import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'

function AlertMessage() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const snackMessageSet = (message) => setSnackMessage(message);

  //trigger close alert message
  const handleCloseSnackbar = () => setOpenSnackbar(false);

  //auto close alert message
  useEffect(() => {
    let timeout;
    if (openSnackbar) {
      timeout = setTimeout(() => {
        setOpenSnackbar(false);
      }, 3000); // Change duration as needed (in milliseconds)
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [openSnackbar]);

    
  return (
    <Alert show={openSnackbar} variant="success" onClose={handleCloseSnackbar} dismissible className="position-fixed" style={{ top: "60px", right: "10px" }}>
    {snackMessage}
  </Alert>
  )
}

export default AlertMessage