import "./Profile.css";
import { FaSearch } from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { BiLoaderAlt, BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdFunnel } from "react-icons/io";

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-settings">
                <img className="profile-img" src="./profile/profile.jpg" alt="Фото пользователя" />
                <div className="profile-settings-icons">
                    <MdGroups className="settings-icon"/>
                    <BiLoaderAlt className="settings-icon" />
                    <BsFillChatLeftTextFill className="settings-icon" />
                    <BiDotsVerticalRounded className="settings-icon" />
                </div>
            </div>
            <div className="profile-searchbox">
                <div className="profile-search">
                    <FaSearch className="search-icon" />
                    <input className="profile-input" placeholder="Поиск или новый чат" />
                </div>
                <IoMdFunnel className="settings-icon" />
            </div>
        </div>
    )
}

export default Profile;