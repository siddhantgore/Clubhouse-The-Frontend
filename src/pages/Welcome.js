import React from 'react'
import style from "../style/welcome.module.css"
import {Link} from "react-router-dom"

function Welcome() {
    return (
        <div className={style.WelcomeContainer}>
            <h1>Welcome!</h1>
            <div className={style.WelcomeInfo}>
                <p>
                    Clubhouse is built by a small, scrappy team of experienced builders with a strong background in consumer products.
                    We have grown extremely quickly this year — from 9 people in January to 70+ today — but we are still in the early days, and are looking to add more extraordinary people to our team.
                </p>
                <p>
                    Since launching in 2020 we’ve gone from Seed to Series A, B and C — backed by an amazing and diverse group, including a16z and many of the top angel investors and creators in the world.
                </p>
                <p>-The Clubhouse Team</p>
            </div>
            <div className={style.actionBtn}>
                <Link exact to="/invite" className="primaryBtn d-flex align-items-center mb-3">
                    Get Username{""}
                    {/* <img src="" alt=""/> */}
                </Link>
                <Link exact to="/sign_in">Haven't an invite text? <span>Sign in</span></Link>
            </div>
        </div>
    )
}

export default Welcome
