import React from 'react'
import {nanoid} from "nanoid";

export default function ScheduleHeader({shifts}) {
    return (
        <thead>
        <tr>
            <td> </td>
            {shifts.length > 0 && shifts.map((e) => (
                <td key={nanoid()}>{e}</td>
            ))}
        </tr>
        </thead>
    )
}