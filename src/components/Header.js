import React from 'react'
import { Link } from "react-router-dom";
import style from "../style/header.module.css";

function Header() {
    return (
        <div className={style.Header}>
            <Link exact to="/explore">
                <img src="images/search.svg" alt=""/>
            </Link>
            <div className={style.navItems}>
                <Link exact to="/friend_invite">
                <img src="/images/email.png" alt=""/>
                </Link>
                <Link exact to="/upcoming">
                <img src="/images/calendar.png" alt=""/>
                </Link>
                <Link exact to="/activity">
                <img src="/images/notification.png" alt=""/>
                </Link>
                <Link exact to="/profile">
                <img src="/images/user.png" alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default Header
