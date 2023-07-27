// import { leaveRoom } from "../realtimeCommunication/roomHandler";

export const logout = () => {
    // leaveRoom()
    localStorage.clear();
    window.location.pathname = "/login";
  };