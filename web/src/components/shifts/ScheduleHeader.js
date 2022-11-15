import React from 'react'
import {nanoid} from "nanoid";

export default function ScheduleHeader({days, hebrewDaysMapping}) {


    return (
        <thead>
         <tr>
             <td colSpan="2"></td>
             {days.length > 0 && days.map((e) => (
                 <td key={nanoid()}>{hebrewDaysMapping[e]}</td>
             ))}
         </tr>
        <tr>

            <td>שם העובד</td>
            <td>ימי ותק</td>
            {days.length > 0 && days.map((e) => (
                <td>
                    <td>תחילת משמרת</td><td>סוף משמרת</td>
                </td>
            ))}


        </tr>
        </thead>
    )
}