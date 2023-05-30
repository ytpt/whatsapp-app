import Contacts from "./Contacts/Contacts";
import "./ContactListComponent.css";
import Profile from "./Profile/Profile";

const ContactListComponent = () => {
    return(
        <div className="contactList-container">
            <Profile />
            <Contacts />
        </div>
    )
}

export default ContactListComponent;