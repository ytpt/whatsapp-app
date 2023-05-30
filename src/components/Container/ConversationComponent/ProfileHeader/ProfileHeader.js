import "./ProfileHeader.css";

const ProfileHeader = () => {
    return (
        <div className="profile-header">
            <img className="profile-header-img" src="./profile/profile.jpg" alt="Фото пользователя" />
            <div className="profile-header-info">
                <span className="header-name">Sevak</span>
            </div>
        </div>
    )
}

export default ProfileHeader;