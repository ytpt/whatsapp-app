import "./User.css";

const User = () => {
    return (
        <div className="user-container">
            <div className="user-icon">
                <img src="./profile/user1.jpg" alt="Пользователь 1" className="user-icon" />
            </div>
            <div className="user-info">
                <span className="user-name">Anna</span>
                <span className="user-message">Hello!</span>
            </div>
            <div className="user-date">
                <span className="user-date-message">30.05.2023</span>
            </div>
        </div>
    )
}

export default User;