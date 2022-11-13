import React from 'react'
import Branch from "./Branch";
import {nanoid} from "nanoid";

const branchesList = [
    {
        name: "תלפיות סניף מפעל",
        address: "האומן 23",
        timeSlots: {
            weekDay: "24 שעות",
            friday: "עד שעה 15:00",
            saturday: "שעה לאחר צאת השבת"
        }

    },
    {
        name: "סניף גבעת מרדכי",
        address: "שח\"ל 56",
        timeSlots: {
            weekDay: "24 שעות",
            friday: "עד שעה 15:00",
            saturday: "שעה לאחר צאת השבת"
        }

    },
    {
        name: "סניף מעלה אדומים",
        address: "הצור 36, מעלה אדומים",
        timeSlots: {
            weekDay: "24 שעות",
            friday: "עד שעה 15:00",
            saturday: "שעה לאחר צאת השבת"
        }

    },
    {
        name: "סניף מלחה",
        address: "קניון מלחה",
        timeSlots: {
            weekDay: "24 שעות",
            friday: "עד שעה 15:00",
            saturday: "שעה לאחר צאת השבת"
        }

    },
    {
        name: "פסגת זאב",
        address: "פסגת זאב",
        timeSlots: {
            weekDay: "24 שעות",
            friday: "עד שעה 15:00",
            saturday: "שעה לאחר צאת השבת"
        }

    },
    {
        name: "מבשרת",
        address: "מבשרת",
        timeSlots: {
            weekDay: "24 שעות",
            friday: "עד שעה 15:00",
            saturday: "שעה לאחר צאת השבת"
        }

    },
]
export default function Branches() {

    return (
        <div className="branches__container">
            <h1 className="tavla ">הסניפים שלנו</h1>
            <table className="snifim">
                <thead><tr>
                    <th>שעות פתיחה</th>
                    <th>רחוב</th>
                    <th>סניף</th>
                </tr>
                </thead>
                {branchesList.length > 0 && branchesList.map((e, i) => (
                    <Branch name={branchesList[i].name} address={branchesList[i].address}
                            timeSlots={branchesList[i].timeSlots} key={nanoid()}/>
                ))}


            </table>
        </div>

    )
}
