import React from 'react'
import ScheduleHeader from "./ScheduleHeader";
import {nanoid} from "nanoid";
import ScheduleRow from "./ScheduleRow";

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



export default function Schedule({data}) {


    const getShifts = ()=>{
        const shifts = Object.keys(data["Sun"])
        console.log(shifts)
        for (let i=0; i<shifts.length-1; i++){
            let smallest = i
            for (let j=i+1; j<shifts.length; j++){
                console.log(i, j)
                const [startA] = shifts[smallest].split("-")

                const [startB] = shifts[j].split("-")
                console.log(startA, startB)

                if (Number(startB) < Number(startA)){
                    console.log(true)
                    smallest = j

                }

            }
            console.log(shifts[i], shifts[smallest])
            if (smallest !== i ){
                const temp = shifts[i]
                shifts[i] = shifts[smallest]
                shifts[smallest] = temp
            }
            console.log(shifts[i], shifts[smallest])


        }

        return shifts
    }
    const shifts = getShifts()



    return (
        <table className="table-class">
            <ScheduleHeader shifts={shifts}/>
            <tbody>

            {days.length > 0 && days.map((e, i) => (
                <ScheduleRow  key={nanoid()} day={e} hebrewDaysMapping={hebrewDaysMapping} dayDaya={data[e]} shifts={shifts}/>
            ))}
            </tbody>
        </table>
    )
}
