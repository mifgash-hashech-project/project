import React from 'react'
import WorkerDataHeader from "./WorkerDataHeader";
import {nanoid} from "nanoid";
import WorkerDataRow from "./WorkerDataRow";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const hebrewDaysMapping = {
    "Sun": "ראשון",
    "Mon": "שני",
    "Tue": "שלישי",
    "Wed": "רביעי",
    "Thu": "חמישי",
    "Fri": "שישי",
    "Sat": "שבת"
}



export default function WorkerData({data, setScheduleDataFunc}) {

    return (
        <div className="table-container">
        <table className="table-class">
            <WorkerDataHeader days={days} hebrewDaysMapping={hebrewDaysMapping}/>
            <tbody>

            {data.length > 0 && data.map((e, i) => (
                <WorkerDataRow  key={nanoid()} worker={e} rowIndex={i} scheduleData={data} setScheduleDataFunc={setScheduleDataFunc}/>
            ))}
            </tbody>
        </table>
        </div>

    )
}
