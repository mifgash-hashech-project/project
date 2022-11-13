import React from 'react'
import Profile from "./Profile";


export default function Profiles() {
    const profilesList = [
        {name: "שי נאור",role:"מנכ\"ל", logo:"shai_naor.jpg"},
        {name: "ניר נאור",role:"סמנכ\"ל", logo:"nir_naor.jpg"},
        {name: "אלעד נאור",role:"מנהל ראשי", logo:"elad_naor.jpg"}
    ]

    return (
        <div className="Profiles">
            {profilesList.length > 0 && profilesList.map((e, i) => (
                <Profile
                    name={profilesList[i].name}
                    role={profilesList[i].role}
                    logo={profilesList[i].logo}/>
            ))}

        </div>

    )
}