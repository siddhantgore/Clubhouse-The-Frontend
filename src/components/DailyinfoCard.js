import React from 'react'
import style from "../style/dailyinfoCard.module.css";
import data from "../data/dailyCards.json";

function DailyinfoCard() {
    return (
        <div className={style.dailyCard}>
            {data.map((items)=>(
                <div>
                    <span className="">{items.time}</span>
                    <div>
                        <span className="">{items.title}</span>
                        <p>{items.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DailyinfoCard
