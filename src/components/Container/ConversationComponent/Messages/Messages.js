import React, { useState, useEffect } from "react";
import Message from "./Message/Message";
import "./Messages.css";

const Messages = ({ inputValue }) => {
    const [messages, setMessages] = useState([
        { id: 1, isYours: true, text: "Hello, Anna!", time: "20:15"},
        { id: 2, isYours: false, text: "Hello, Sevak!", time: "20:45" },
        { id: 3, isYours: true, text: "How are you?", time: "20:46" }
    ]);

    const currentHours = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    const formatedHours = currentHours < 10 ? '0' + currentHours : currentHours;
    const formatedMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;

    useEffect(() => {
        if (inputValue) {
            const newMessage = {
                id: messages.length + 1,
                isYours: true,
                text: inputValue,
                time: formatedHours + ":" + formatedMinutes
            };
            setMessages([...messages, newMessage]);
        }
    }, [inputValue]);


    return (
        <div className="message-container">
            {messages.map(message => (
                <Message
                    key={message.id}
                    className="message"
                    isYours={message.isYours}
                    text={message.text}
                    time={message.time}
                />
            ))}
        </div>
    )
}

export default Messages;