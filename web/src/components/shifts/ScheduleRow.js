import React from 'react'
import {nanoid} from "nanoid";

export default function ScheduleRow({day, hebrewDaysMapping, dayDaya, shifts}) {

    return (
        <tr>
            <td>{hebrewDaysMapping[day]}</td>
            {shifts.length > 0 && shifts.map((e) => (
                <td key={nanoid()}>{dayDaya[e].join(" | ")}</td>
            ))}
        </tr>


    )
}
