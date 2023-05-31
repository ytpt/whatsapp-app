import "./Chatbox.css";
import axios from "axios";
import React, { useState } from "react";
import config from  "../../../../config";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Chatbox = ({ onChange }) => {
    const [inputValue, setInputValue] = useState("");

    const { host, idInstance, apiTokenInstance } = config;
    const url = `${host}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;

    // const sendMessage = async () => {
    //     try {
    //       const response = await axios.post(url, {
    //         "chatId": "7123456789@c.us",
    //         "message": inputValue
    //       });
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    // };

    const handleInputChange = () => {
        const newInputValue = document.querySelector(".chatbox-input").value;
        onChange(newInputValue);
        clearInputValue();
    }

    const clearInputValue = () => {
        setInputValue("");
    };

    const onKeyDown = (e) => {
        e.key === "Enter" && handleInputChange();
    }

    return (
        <div className="chatbox-container">
            <div className="chatbox">
                <div className="chatbox-emoji-container">
                    <BsEmojiSmile className="emoji" />
                    <AiOutlinePaperClip className="emoji" />
                </div>
                <input 
                    className="chatbox-input" 
                    placeholder="Введите сообщение"
                    value={inputValue}
                    onKeyDown={onKeyDown}
                    onChange={(e) => setInputValue(e.target.value)} 
                />
                { inputValue.length !== 0 
                    ? <IoSend className="emoji"
                        // onClick={sendMessage}
                        onClick={handleInputChange}
                    />
                    : <FaMicrophone className="emoji" />
                }
            </div>
        </div>
    )
}

export default Chatbox;