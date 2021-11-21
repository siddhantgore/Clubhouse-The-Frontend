import React from 'react';
import style from "../style/phoneConfirmation.module.css";
import {Link} from "react-router-dom";

function CodeConfirm() {
    return (
        <div className={style.phoneConfirmationContainer}>
            <Link exact to="/invite" className={style.backBtn}>
                <img src="/images/back_arrow.svg" alt=""/>
            </Link>
            <div className="text-center">
               <h2>Enter Confirmation Code</h2> 
               <input type="text"
               style={{
                   textAlign:"center",
                   border:"none",
                   outline:"none",
               }}
               />
               <p className="mt-2">Didn't Recieve Code? <span>Resend</span></p>
            </div>
            <Link exact to="allow_notification" className="primaryBtn">
                Next <img src="" alt="" className="ml-1"/>
            </Link>
        </div>
    )
}

export default CodeConfirm
