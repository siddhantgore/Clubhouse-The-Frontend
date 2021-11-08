import React,{useState} from 'react';
import {Link} from "react-router-dom";
import style from "../style/phoneConfirmation.module.css"
import PhoneInput from "react-phone-number-input"

function PhoneConfirmation() {
    const [value,setValue]=useState();
    return (
        <div className={style.phoneConfirmationContainer}>
            <Link exact to="/" className={style.backBtn}>
                <img src="/images/back_arrow.svg" alt=""/>
            </Link>
            <h1>Enter Your Phone</h1>
            <PhoneInput international defaultCountry="IN" value={value}
                onChange={setValue}
            />
            <p>
                By entering your phone number you are agree with our <span>terms and conditions</span>
            </p>
            <p>Thanks!</p>
            <Link exact to="code_confirm" className="primaryBtn">
                Next <img src="" className="ml-1"/>
            </Link>
        </div>
    )
}

export default PhoneConfirmation
