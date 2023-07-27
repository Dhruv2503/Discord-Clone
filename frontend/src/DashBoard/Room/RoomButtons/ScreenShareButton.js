import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import { setScreenSharingStream } from "../../../store/actions/roomActions";
import  * as webRTCHandler from "../../../realtimeCommunication/webRTCHandler"
import {useDispatch} from 'react-redux'

const constraints = {
  audio: false,
  video: true,
};

const ScreenShareButton = ({
  localStream,
  screenSharingStream,
  isScreenSharingActive
}) => {
  const Dispatch=useDispatch()
  // const handleScreenShareToggle = async () => {
  const handleScreenShareToggle=()=>async(Dispatch)=>{
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (err) {
        console.log(
          "error occured when trying to get an access to screen share stream"
        );
      }

      if (stream) {
        Dispatch(setScreenSharingStream(stream));
        webRTCHandler.switchOutgoingTracks(stream);
      }
    } else {
      webRTCHandler.switchOutgoingTracks(localStream);
      screenSharingStream.getTracks().forEach((t) => t.stop());
      setScreenSharingStream(null);
    }
  };

  const handleScreenShareToggletemp=()=>{
    Dispatch(handleScreenShareToggle())
  }

  return (
    <IconButton onClick={handleScreenShareToggletemp} style={{ color: "white" }}>
      {isScreenSharingActive ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
