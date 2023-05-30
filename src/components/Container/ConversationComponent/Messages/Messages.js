import Message from "./Message/Message";
import "./Messages.css";

const Messages = ({ inputValue }) => {
    return (
        <div className="message-container">
            <Message className="message" isYours={true} text={"Hello, Anna!"} />
            <Message className="message" isYours={false} text={"Hello, Sevak!"} />
            <Message className="message" isYours={true} text={"How are you?"} />
            {inputValue && <Message className="message" isYours={true} text={inputValue} />}
        </div>
    )
}

export default Messages;