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

    const handleInputChange = () => {
        const newInputValue = document.querySelector(".chatbox-input").value;
        onChange(newInputValue);
        setInputValue("");

        let data = JSON.stringify({
            "chatId": "7123456789@c.us",
            "message": inputValue
        });

        let requestAPI = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${host}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(requestAPI)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
                        onClick={handleInputChange}
                    />
                    : <FaMicrophone className="emoji" />
                }
            </div>
        </div>
    )
}

export default Chatbox;