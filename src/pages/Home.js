import {React,useState} from 'react'
import DailyinfoCard from '../components/DailyinfoCard';
import Header from '../components/Header';
import style from "../style/home.module.css";
import RoominfoCard from '../components/RoominfoCard';
import {AiOutlinePlus} from "react-icons/ai";
import {BsGrid3X3Gap} from "react-icons/bs";
import data from "../data/roomCard.json";
import BottomSheet from '../components/BottomSheet';

function Home() {

    const [itemsvisible, setItemsvisible] = useState(true);
    const [sheetVisible, setSheetVisible] = useState(false);
    const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
    const [loaderVisibility, setLoaderVisibility] = useState(false);
    const [cardId, setcardId] = useState(1)

    return (
        <div>
            <Header/>
            <div className={style.homeContainer}>
            <DailyinfoCard/>
            <RoominfoCard/>
            </div>
            <div className={style.actionBtn}>
                <button onClick={()=>setSheetVisible(true)}>
                <AiOutlinePlus className="mr-2"
                style={{
                   transform:"scale(1.2)",
                   paddingLeft:"2px",
                   marginRight:"10px"
                }}
                />
                Start Room
                </button>
                <button>
                    <BsGrid3X3Gap/>
                </button>
            </div>
            <BottomSheet 
            sheetTitle="start room"
            setSheetVisible={(item)=>setSheetVisible(item)}
            sheetVisible={sheetVisible}
            cardDetail={data.find((item)=> item.id===cardId)}
            setItemsvisible={(item)=>setItemsvisible(item)}
            setSheetCreateRoom={(item)=>{
            setLoaderVisibility(true);

            setTimeout(()=>{
                setSheetCreateRoom(item);
                setLoaderVisibility(false);
            },1000)
            }
            }
            />
        </div>
    )
}

export default Home
