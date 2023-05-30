import "./Message.css";

const Message = ({ isYours, text, time }) => {
    return (
        <div className={isYours ? "message yours" : "message other"}>
            <span className="message-text">
                {text}
            </span>
            <span className="message-date">{time}</span>
        </div>
    )
}

export default Message;