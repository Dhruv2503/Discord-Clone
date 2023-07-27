import {useDispatch} from 'react-redux'
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { useEffect } from "react";
import { setuserDetails } from '../store/actions/authActions';
import { logout } from '../utils/auth';
import { connectWithSocketServer } from '../realtimeCommunication/socketConnection';
import Room from './Room/Room';
import {useSelector} from 'react-redux';


const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

export default function Dashboard() {
  const Dispatch=useDispatch()
  useEffect(() => {
    const userDetails = localStorage.getItem("user");

    if (!userDetails) {
      logout();
    } else {
      Dispatch(setuserDetails(JSON.parse(userDetails)));
      connectWithSocketServer(JSON.parse(userDetails))
    }
  }, []);

  const isUserInRoom=useSelector((state)=>state.room.isUserInRoom)

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
      {isUserInRoom &&<Room/>}
    </Wrapper>
  )
}
