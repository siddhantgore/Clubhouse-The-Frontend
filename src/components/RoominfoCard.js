import React from 'react';
import style from "../style/roomCard.module.css";
import data from "../data/roomCard.json";


function RoominfoCard() {
    return (
        <div>
            {data.map((items)=>(
               <div>
                   <div>
                       <div className={style.roomCard}>
                           <h6>{items.title}</h6>
                           <h2>{items.sub_title}</h2>
                           <div>
                               {items.members.map((members)=>(
                                   <p>
                                       {members.fname} {members.lname}
                                   </p>
                               ))}
                           </div>
                       </div>
                   </div>
               </div>
            ))}
        </div>
    )
}

export default RoominfoCard
