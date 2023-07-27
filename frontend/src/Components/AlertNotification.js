import { closeAlertMessage } from "../store/actions/alertActions";

import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";

const AlertNotification = () => {
  const current=useSelector((state)=>state.alert);
  const Dispatch=useDispatch()
  const onCloseHandler=()=>{
    Dispatch(closeAlertMessage())
  }
  return (
    <>
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center"}}
      open={current?.showAlertMessage}
      onClose={onCloseHandler}
      autoHideDuration={10}
    >
      <Alert severity="info">{current?.alertMessageContent}</Alert>
    </Snackbar>
    </>
  );
};

export default AlertNotification
