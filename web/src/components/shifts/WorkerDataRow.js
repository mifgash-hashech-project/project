import React from 'react'
import {nanoid} from "nanoid";

export default function WorkerDataRow({worker, rowIndex, scheduleData, setScheduleDataFunc}) {
    const onChangeInputValue = (index)=>{
        return (event)=>{
            const value = event.target.value
            const newData = scheduleData
            scheduleData[rowIndex][index] = value
            setScheduleDataFunc(newData)
        }
    }

    return (
        <tr>
            {worker.length > 0 && worker.map((e, i) => (
                <td  key={nanoid()}><input defaultValue={e} onChange={onChangeInputValue(i)}/></td>
            ))}
        </tr>


    )
}
