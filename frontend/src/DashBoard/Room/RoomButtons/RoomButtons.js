import React from 'react'
import { styled } from '@mui/material'
import {useSelector} from 'react-redux'

import ScreenShareButton from './ScreenShareButton';
import MicButton from './MicButton';
import CloseRoomButton from './CloseRoomButton';
import CameraButton from './CameraButton';


const MainContainer = styled("div")({
    height: "15%",
    width: "100%",
    backgroundColor: "#5865f2",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const RoomButtons = () => {
  const room=useSelector((state)=>state.room)
  // const {localStream}=room.localStream
  const localStream=useSelector((state)=>state.room.localStream)
  // const {isUserJoinedWithOnlyAudio}=room.isUserJoinedWithOnlyAudio
  const isUserJoinedWithOnlyAudio =useSelector((state)=>state.room.isUserJoinedWithOnlyAudio)
  return (
    <MainContainer>
      {!isUserJoinedWithOnlyAudio && <ScreenShareButton {...room} />}
      <MicButton localStream={localStream} />
      <CloseRoomButton />
      {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />}
    </MainContainer>
  )
}

export default RoomButtons
