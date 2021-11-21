import React from 'react'
import DailyinfoCard from '../components/DailyinfoCard';
import Header from '../components/Header';
import style from "../style/home.module.css";
import RoominfoCard from '../components/RoominfoCard';

function Home() {
    return (
        <div>
            <Header/>
            <div className={style.homeContainer}>
            <DailyinfoCard/>
            <RoominfoCard/>
            </div>
        </div>
    )
}

export default Home
