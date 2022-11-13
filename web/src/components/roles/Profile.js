import React from 'react'

export default function Profile({name, role, logo}) {

    return (
        <div className="Profile">
            <h1>{role}: {name}</h1>
            <img src={`./icons/profiles/${logo}`} alt={name}/>
        </div>
    )
}