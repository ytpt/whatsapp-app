import React, { useState } from "react";
import Chatbox from "./Chatbox/Chatbox";
import "./ConversationComponent.css";
import Messages from "./Messages/Messages";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const ConversationComponent = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (inputValue) => {
        setInputValue(inputValue);
    }
    return (
        <div className="conversational-container">
            <ProfileHeader />
            <Messages inputValue={inputValue} />
            <Chatbox onChange={handleInputChange} />
        </div>
    )
}

export default ConversationComponent;