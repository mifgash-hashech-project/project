import React from 'react';
import { NavLink } from 'react-router-dom';

export default function FooterIcon({ name, path}) {
    const nameLower = path.toLowerCase().trim();
    return (
        <NavLink to={`/${nameLower}`} className="nav" activeClassName="nav_active">
            <img className="icon" src={`./icons/footer/‏‏News.png`} alt="icon" />
            <img className="icon__active" src={`./icons/footer/‏‏News__active.png`} alt="icon" />
            <div className="icon__text">{name}</div>
        </NavLink>
    )
}
