import React from 'react'

const getTimeSlot = ({weekDay, friday, saturday}) => {
    const weekDayString = `שעות פתיחה א-ה: ${weekDay}`
    const fridayString = `ו: ${friday}`
    const saturdayString = `מוצ"ש: ${saturday}`
    return `${weekDayString} ${fridayString} ${saturdayString}`
};
export default function Branch({name, address, timeSlots}) {

    return (
        <tr>
            <td>{getTimeSlot(timeSlots)}</td>
            <td>{address}</td>
            <td>{name}</td>
        </tr>

    )
}