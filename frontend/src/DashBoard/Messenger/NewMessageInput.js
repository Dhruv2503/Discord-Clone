import React, { useState } from "react";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import { sendDirectMessage } from "../../realtimeCommunication/socketConnection";

const MainContainer = styled("div")({
  height: "60px",
  position:"absolute",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bottom:"10px"
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  width: "98%",
  height: "44px",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "0 10px",
});

const NewMessageInput = () => {
  const [message, setMessage] = useState("");
  const chosenChatDetails=useSelector((state)=>state.chat.chosenChatDetails)

  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.length > 0) {
      sendDirectMessage({
        receiverUserId: chosenChatDetails.id,
        content: message,
      });
    //   console.log(message)
      setMessage("");
    }
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Write message to ${chosenChatDetails.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      />
    </MainContainer>
  );
};

export default NewMessageInput