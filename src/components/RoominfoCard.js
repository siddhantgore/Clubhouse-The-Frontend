import React from 'react';
import style from "../style/roomCard.module.css";
import data from "../data/roomCard.json";
import {BsChatDots,BsChatDotsFill,BsFillPersonFill} from "react-icons/bs";

function RoominfoCard() {
    return (
        <div>
            {data.map((items)=>(
               <div>
                   <div>
                       <div className={style.roomCard}>
                           <h6>{items.title}</h6>
                           <h2>{items.sub_title}</h2>
                           <div className="elements">
                               <div className={style.roomMembers}>
                                   <div>
                                       <img src="/images/images.jpg" alt=""/>
                                       <img src="/images/download.png" alt=""/>
                                   </div>
                               </div>
                               <div>
                               {items.members.map((members)=>(
                                   <p>
                                       {members.fname} {members.lname} <BsChatDots/>
                                   </p>
                               ))}
                               <p className="icons">
                                   <span className="mr-2">1.8</span>
                                   <span className="mx-2"></span>{" "}
                                   <BsChatDotsFill/>
                                   <span className="mx-2"></span>{"  "}
                                   <span className="mr-2">5</span>
                                   <span className="mx-2"></span>{" "}
                                   <BsFillPersonFill/>
                               </p>
                            </div>
                           </div>
                       </div>
                   </div>
               </div>
            ))}
        </div>
    )
}

export default RoominfoCard
