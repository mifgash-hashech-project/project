import React from 'react'

export default function Employee({personalid, firstname, lastname, phone, email, role}) {

    return (
        <div className="employee">
            <ul>
                <li>First Name: {firstname}</li>
                <li>Last Name: {lastname}</li>
                <li>ID: {personalid}</li>
                <li>Role: {role}</li>
                <li>Phone: {phone}</li>
                <li>Email: {email}</li>
            </ul>
        </div>
    )
}