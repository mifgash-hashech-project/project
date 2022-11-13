import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Link({name, alias}) {
    return (
        <div className="nav__link">
            <NavLink to={`/${name}`} className="a_nav" activeClassName="a_nav__active">{alias}</NavLink>
        </div>
    )
}