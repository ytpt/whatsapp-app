import "./Message.css";

const Message = ({ isYours, text }) => {  
    return (
        <div className={isYours ? "message yours" : "message other"}>
            <span className="message-text">
                {text}
            </span>
            <span className="message-date">20:15</span>
        </div>
    )
}

export default Message;