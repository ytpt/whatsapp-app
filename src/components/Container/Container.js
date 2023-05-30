import ConversationComponent from "./ConversationComponent/ConversationComponent";
import ContactListComponent from "./ContactListComponent/ContactListComponent";
import "./Container.css";

const Container = () => {
    return (
        <div className= "container">
            <ContactListComponent />
            <ConversationComponent />
        </div>
    )
}

export default Container;