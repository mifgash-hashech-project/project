import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {DataContext} from "../../contexts/DataContext";
import {setDataAction} from "../../actions/DataActions";
import {getRouteUsage, saveRouteUsage} from "../../server/usage";
import {UserContext} from "../../contexts/UserContext";

export default function Link({name, alias}) {
    const { contentData, contentDataDispatch } = useContext(DataContext);
    const { userData } = useContext(UserContext);

    const onClickLink = async ()=>{
        if (!userData.loggedIn){
            const now = Date.now();
            await saveRouteUsage(getRouteUsage(contentData.routeData, now, userData.userId, userData.sessionId))
            contentDataDispatch(setDataAction({routeData:{route: name, timestamp: now}}))
        }

    }
    return (
        <div className="nav__link" onClick={onClickLink}>
            <NavLink to={`/${name}`} className="a_nav" activeClassName="a_nav__active">{alias}</NavLink>
        </div>
    )
}