import React from 'react';
import style from "../style/phoneConfirmation.module.css";
import {Link} from "react-router-dom";

function AllowNotification() {
    return (
        <div className={style.phoneConfirmationContainer}>
            <div className="text-center">
                <h2 className="mb-4">Last, important step!</h2>
                <h5 className="mb-3">Allow Notication to show when people are talking</h5>
                <div className={style.notificationContainer}>
                    <div className="p-3">
                        <h6>"Clubhouse Would Like to Send You Notification"</h6>
                    </div>
                    <div className={style.actionBtn}>
                        <Link exact to="/home">
                            Dont' Allow
                        </Link>
                        <Link exact to="/home">
                            Allow
                        </Link>
                        <div className="handIcon">
                        <img src="https://img.icons8.com/office/40/000000/one-finger.png" alt="" style={{
                            position:"absolute",
                            bottom:"-50px",
                            right:"20%"
                        }}/>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default AllowNotification
