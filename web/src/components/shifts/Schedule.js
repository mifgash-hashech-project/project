import React from 'react'
import ScheduleHeader from "./ScheduleHeader";

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

export default function Schedule() {

    return (
        <table className="table-class">
            <ScheduleHeader days={days} hebrewDaysMapping={hebrewDaysMapping}/>
        </table>
    )
}
