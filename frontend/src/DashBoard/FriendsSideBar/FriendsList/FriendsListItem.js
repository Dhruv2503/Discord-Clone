import React from "react";
import Button from "@mui/material/Button";
import Avatar from "../../../Components/Avatar";
import Typography from "@mui/material/Typography";
import OnlineIndicator from "./OnlineIndicator";
import { setChosenChatDetails } from "../../../store/actions/chatActions";
import { chatTypes } from "../../../store/actions/chatActions";
import {useDispatch} from 'react-redux'

const FriendsListItem = ({ id, username, isOnline }) => {
  const Dispatch=useDispatch()
  const handleChooseActiveConversation = () => {
    Dispatch(setChosenChatDetails({ id: id, name: username }, chatTypes.DIRECT));
  };
  return (
    <Button
      onClick={handleChooseActiveConversation}
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          marginLeft: "7px",
          fontWeight: 700,
          color: "#8e9297",
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendsListItem;
