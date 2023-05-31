import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Messages.css";
import Message from "./Message/Message";
import config from "../../../../config";

const Messages = ({ inputValue }) => {
    const { host, idInstance, apiTokenInstance } = config;
    const [receiptId, setReceiptId] = useState(null);
    const [messages, setMessages] = useState([
        // { id: 1, isYours: true, text: "Hello, Anna!", time: "20:15"},
        // { id: 2, isYours: false, text: "Hello, Sevak!", time: "20:45" },
        // { id: 3, isYours: true, text: "How are you?", time: "20:46" }
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

            //Get notification
            // const FormData = require("form-data");
            // let data = new FormData();
            //
            // let getNotificationAPI = {
            //     method: "get",
            //     maxBodyLength: Infinity,
            //     url: `${host}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
            //     headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' },
            //     data : data
            // };
            //
            // axios.request(getNotificationAPI)
            //     .then((response) => {
            //         console.log(JSON.stringify(response.data));
            //         const { receiptId } = response.data;
            //         setReceiptId(receiptId);
            //         console.log(receiptId);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });
        }
    }, [inputValue]);

    //deleteNotification
    // useEffect(() => {
    //     if (receiptId) {
    //         let deleteNotificationAPI = {
    //             method: "delete",
    //             maxBodyLength: Infinity,
    //             url: `${host}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
    //             headers: {}
    //         };
    //
    //         axios.request(deleteNotificationAPI)
    //             .then((response) => {
    //                 console.log(JSON.stringify(response.data));
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }
    // }, [receiptId]);

    return (
        <div className="message-container">
            { (messages)
                && messages.map(message => (
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