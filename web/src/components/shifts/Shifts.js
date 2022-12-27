import React, {useContext, useState} from 'react'
import WorkerData from "./WorkerData";
import LoaderContainer from "../main/LoaderContainer";
import {getWorkerSchedule} from "../../server/schedule";
import Schedule from "./Schedule";
import {goForwardAction} from "../../actions/ModalActions";
import {ModalContext} from "../../contexts/ModalContext";

const DATA = [
    // ['אבי', 16, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12],
    ['בני', 50, 12, 19, 12, 19, 5, 15, 8, 20, 15, 24, 12, 19, 12, 19],
    ['גדי', 80, 5, 15, 5, 15, 12, 19, 15, 24, 8, 20, 15, 24, 8, 20],
    // ['דוד', 24, 15, 24, 8, 20, 15, 24, 5, 15, 12, 19, 8, 20, 5, 15],
    ['הידאי', 63, 8, 20, 15, 24, 8, 20, 12, 19, 8, 20, 5, 15, 15, 24],
    ['וקסמן', 55, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12],
    // ['זכי', 21, 12, 19, 12, 19, 5, 15, 8, 20, 15, 24, 12, 19, 12, 19],
    ['חנוך', 80, 5, 15, 5, 15, 12, 19, 15, 24, 8, 20, 15, 24, 8, 20],
    ['טל', 65, 15, 20, 8, 20, 15, 24, 5, 11, 12, 19, 8, 19, 5, 15],
    ['יוסי', 63, 8, 20, 15, 24, 8, 20, 12, 19, 8, 20, 5, 15, 15, 24],
    // ['כפיר', 16, 0, 12, 0, 12, 0, 12, 0, 12, 8, 19, 0, 12, 0, 12],
    ['לוני', 50, 8, 19, 12, 19, 5, 15, 8, 20, 15, 24, 12, 19, 12, 19],
    // ['מאור', 11, 5, 15, 5, 15, 12, 19, 15, 24, 8, 20, 15, 24, 8, 20],
    // ['נריה', 24, 15, 24, 8, 20, 15, 24, 5, 15, 12, 19, 8, 20, 5, 15],
    ['סמי', 63, 8, 20, 15, 24, 8, 20, 11, 22, 8, 20, 10, 16, 15, 24],
    // ['עופר', 16, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12],
    ['פנחס', 66, 12, 19, 12, 19, 8, 19, 8, 20, 15, 24, 12, 19, 8, 19],
    ['ציקי', 80, 5, 15, 5, 15, 12, 19, 15, 24, 8, 20, 15, 24, 8, 20],
    // ['קדוש', 24, 11, 20, 11, 23, 15, 24, 5, 15, 12, 19, 8, 20, 5, 15],
    ['רוני', 86, 8, 20, 15, 24, 8, 20, 12, 19, 8, 20, 5, 15, 15, 24],
    // ['שחר', 16, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12],
    ['תומר', 50, 12, 19, 12, 19, 5, 15, 8, 20, 8, 19, 12, 19, 12, 19],
    ['אביה', 100, 0, 14, 5, 13, 10, 19, 15, 22, 8, 20, 10, 24, 8, 20],
    // ['בניה', 24, 15, 24, 8, 20, 15, 24, 8, 19, 12, 19, 8, 20, 5, 15],
    ['גדעון', 63, 8, 20, 15, 24, 8, 20, 12, 19, 8, 20, 5, 15, 15, 24],

]

export default function Shifts() {

    const [showLoader, setShowLoader] = useState(false);
    const [showData, setShowData] = useState(true);
    const [scheduleData, setScheduleData] = useState(DATA);
    const [finalScheduleData, setFinalScheduleData] = useState({"Sun": []});
    const { modalDataDispatch } = useContext(ModalContext);
    const onClickGetSchedule = async ()=>{
        setShowLoader(true)
        const result = await getWorkerSchedule(scheduleData)
        setShowLoader(false)

        if (!!result){
            setFinalScheduleData(result.schedule)
            setShowData(false)
        } else {
            modalDataDispatch(goForwardAction({
                elementName: "ApprovalMessage",
                props: { message: "Failed to get Shifts data from schedule" }
            }));
        }


    }
    const onClickEditShifts = async ()=>{
        setShowData(true)

    }

    return (
        <div className="shifts__container">
            {!showLoader && showData && <button onClick={onClickGetSchedule}>Get Schedule</button>}
            {!showLoader && !showData && <button onClick={onClickEditShifts}>Edit Shifts Data</button>}
            {!showLoader && showData && <WorkerData data={scheduleData} setScheduleDataFunc={setScheduleData}/>}
            {!showLoader && !showData && <Schedule data={finalScheduleData} />}
            {showLoader && <LoaderContainer/>}
        </div>

    )
}
