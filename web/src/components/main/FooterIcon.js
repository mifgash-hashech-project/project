import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {getRouteUsage, saveRouteUsage} from "../../server/usage";
import {setDataAction} from "../../actions/DataActions";
import {DataContext} from "../../contexts/DataContext";
import {UserContext} from "../../contexts/UserContext";

function toCamelCase(string_to_replace){
    return string_to_replace.charAt(0).toUpperCase() + string_to_replace.slice(1);
}

export default function FooterIcon({ name, path}) {
    const { contentData, contentDataDispatch } = useContext(DataContext);
    const { userData } = useContext(UserContext);
    const nameLower = path.toLowerCase().trim();
    const logoName = toCamelCase(path).trim();

    const logoSrc = `./icons/footer/${logoName}.png`;
    const activeLogoSrc = `./icons/footer/${logoName}__active.png`;
    const onClickIcon = async ()=>{
        if (userData.loggedIn){
            const now = Date.now();
            await saveRouteUsage(getRouteUsage(contentData.routeData, now, userData.userId, userData.sessionId))
            contentDataDispatch(setDataAction({routeData:{route: nameLower, timestamp: now}}))
        }

    }
    return (
        <NavLink to={`/${nameLower}`} className="nav" activeClassName="nav_active" onClick={onClickIcon}>
            <img className="icon" src={logoSrc} alt="icon" />
            <img className="icon__active" src={activeLogoSrc} alt="icon" />
            <div className="icon__text">{name}</div>
        </NavLink>
    )
}
