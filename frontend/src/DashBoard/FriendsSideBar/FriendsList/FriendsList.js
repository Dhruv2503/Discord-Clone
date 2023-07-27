import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";
import {useSelector} from 'react-redux'

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
    f.isOnline = isUserOnline ? true : false;
  });

  return friends;
};


const FriendsList = () => {
  const friends=useSelector((state)=>state.friends.friends)
  const onlineUsers=useSelector((state)=>state.friends.onlineUsers)
  return (
    <MainContainer>
      {checkOnlineUsers(friends,onlineUsers).map((f) => (
        <FriendsListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendsList;
