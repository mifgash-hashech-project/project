import React from 'react'

export default function Employee({id, education, phone, email, hobbies}) {

    return (
        <div className="employee">
            <ul>
                <li>ID: {id}</li>
                <li>Education: {education}</li>
                <li>Phone: {phone}</li>
                <li>Email: {email}</li>
                <li>Hobbies: {hobbies}</li>
            </ul>
        </div>
    )
}