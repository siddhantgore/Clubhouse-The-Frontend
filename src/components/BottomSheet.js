import React from 'react';
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/bottomSheet.module.css";
import data from "../data/roomCard.json";
import StartRoom from './bottom_sheets/StartRoom';

function BottomSheet(props) {
    return (
        <SwipeableBottomSheet
        open={props.sheetVisible}
        onChange={()=>{
            props.setSheetVisible(!props.sheetVisible)
            props.setItemsVisible(true)
        }
        }
        fullScreen={props.sheetTitle=='room details' ? true: false}
        >
        <div className={style.BottomSheetContainer}
        style={{
            backgroundColor:props.sheetTitle=='profile' ? 'transparent': ''
        }}
        >
            <StartRoom
            setSheetVisible={(item)=>{
                props.setSheetVisible(item);
                props.setItemsVisible(true);
            }

            }
            />
        </div>
        </SwipeableBottomSheet>
    )
}

export default BottomSheet
