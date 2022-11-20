import React from 'react'
import {nanoid} from "nanoid";

export default function WorkerDataHeader({days, hebrewDaysMapping}) {

    const getShiftValue = (index)=>{
        return index % 2 === 0 ? "תחילת משמרת" : "סוף משמרת"
    }
    return (
        <thead>
        <tr>
            <td colSpan="2"> </td>
            {days.length > 0 && days.map((e) => (
                <td key={nanoid()} colSpan="2">{hebrewDaysMapping[e]}</td>
            ))}
        </tr>
        <tr>

            <td>שם העובד</td>
            <td>ימי ותק</td>
            {days.length > 0 && days.map((e, i) => (
                <td key={nanoid()}>{getShiftValue(i)}</td>
            ))}
            {days.length > 0 && days.map((e, i) => (
                <td key={nanoid()}>{getShiftValue(i+1)}</td>
            ))}


        </tr>
        </thead>
    )
}