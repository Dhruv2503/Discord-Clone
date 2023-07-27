import { openAlertMessage } from "./alertActions";
import * as api from "../../api";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITATIONS: "FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
};

export const sendFriendInvitation = (data, closeDialogHandler) => async(Dispatch)=>{
    const response = await api.sendFriendInvitation(data);
    // const response={error:null}
    // console.log(1);
    if (response.error) {
        Dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
        Dispatch(openAlertMessage("Invitation has been sent!"));
        closeDialogHandler();
    }
};

export const setFriends = (friends) => {
  return {
    type: friendsActions.SET_FRIENDS,
    friends,
  };
};
export const setOnlineUsers = (onlineUsers) => {
  return {
    type: friendsActions.SET_ONLINE_USERS,
    onlineUsers,
  };
};

export const acceptFriendInvitation=(data)=>async(Dispatch)=>{
  const response=await api.acceptFriendInvitation(data);
  if (response.error) {
    Dispatch(openAlertMessage(response.exception?.response?.data));
  } else {
      Dispatch(openAlertMessage("Invitation accepted"));
  }
}

export const rejectFriendInvitation=(data)=>async(Dispatch)=>{

  const response=await api.rejectFriendInvitation(data);
  if (response.error) {
    Dispatch(openAlertMessage(response.exception?.response?.data));
  } else {
      Dispatch(openAlertMessage("Invitation rejected"));
  }
}



export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
    return {
      type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
      pendingFriendsInvitations,
    };
  };  

