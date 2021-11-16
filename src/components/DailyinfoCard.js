import React from 'react'
import style from "../style/dailyinfoCard.module.css";
import data from "../data/dailyCards.json";

function DailyinfoCard() {
    return (
        <div>
            <h1>{data[0].description}</h1>
        </div>
    )
}

export default DailyinfoCard
