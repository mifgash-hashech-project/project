import React from 'react'

export default function ContactForm() {

    return (
        <table className="contact3" dir="rtl">
            <tbody>
            <tr>
                <td><input type="text" placeholder="שם פרטי"/></td>
                <td><input type="text" placeholder="שם משפחה"/></td>
            </tr>
            <tr>
                <td><input type="text" placeholder="רחוב"/></td>
                <td><input type="text" placeholder="עיר"/></td>
                <td><input type="text" placeholder="מספר בית"/></td>
                <td><input type="number" placeholder="מיקוד"/></td>
            </tr>
            </tbody>
        </table>

    )
}