import React, { useContext, useEffect, useState } from 'react'
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { DataContext } from '../../contexts/DataContext';
import { logoutAction, setWindowAction } from '../../actions/UserActions';
import { logout } from '../../server/login';
import {getAllData, getRouteFromLocation, mainPage} from '../../server/utils';
import LoaderContainer from './LoaderContainer';
import { setDataAction } from '../../actions/DataActions';
import Link from "./Link";
import {nanoid} from "nanoid";
import {getRouteUsage, getTotalUsage, saveRouteUsage, saveTotalUsage} from "../../server/usage";
export const headerRoutes = {
    "deliveries": "משלוחים",
    "contact": "צור קשר",
    "want-ads": "דרושים",
    "roles": "תפקידים",
    "shifts": "משמרות",
    "branches": "סניפים",
    "products": "מוצרים",
    "about": "אודות",
}

export default function Header() {
    const { userData, userDataDispatch } = useContext(UserContext);
    const { contentData, contentDataDispatch } = useContext(DataContext);
    const [componentOn, setComponentOn] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();
    const currentRoute = getRouteFromLocation(useLocation());
    const startTime = Date.now()
    const onClickAccount = async ()=>{
        if (userData.loggedIn) {
            const now = Date.now()
            contentDataDispatch(setDataAction({
                routeData: {route: 'accounts', timestamp: now},
                userId: userData.userId
            }))
        }
    }
    useEffect(() => {

        if (userData.loggedIn) {
            contentDataDispatch(setDataAction({
                routeData: {route: currentRoute, timestamp: startTime},
                appStartTime: startTime,
                userId: userData.userId,
                totalPages: 1
            }))
        }
        }, []);
    function useBeforeUnload(onBeforeUnload) {
        useEffect(() => {
            window.addEventListener('beforeunload', onBeforeUnload);
            return () => window.removeEventListener('beforeunload', onBeforeUnload);
        }, [onBeforeUnload]);
    }
    async function summarizeAppUsage(){
        if (userData.loggedIn) {
            const now = Date.now()
            const timeSpent = now - contentData.appStartTime;
            await saveRouteUsage(getRouteUsage(contentData.routeData, now, userData.userId, userData.sessionId))
            const appUsage = getTotalUsage(contentData.totalPages -1, contentData.appStartTime, now, timeSpent, userData.userId, userData.sessionId)
            await saveTotalUsage(appUsage)
        }
    }

    useBeforeUnload(summarizeAppUsage);
    useEffect(() => {
        setComponentOn(true);
        userDataDispatch(setWindowAction(window.innerWidth));
        if (componentOn) getAllData().then((res) => {
            contentDataDispatch(setDataAction(res))
            setIsLoaded(true)
        }).catch((err) => {
            console.log(err)
        });
        return () => {
            setComponentOn(false);
        }
    }, [userDataDispatch, contentDataDispatch, componentOn]);



    const onClickLogo = () => {
        history.push(`/${mainPage}`);
    };

    const onClickLogout = async () => {
        try {
            await logout(userData.token, userData.isAdmin);
            await summarizeAppUsage()
            userDataDispatch(logoutAction());
            history.push(`/${mainPage}`);
        } catch (err) {
            console.log(err)
        }

    };

    const getHeaderLinks = (linksMap)=> {
        const links = [];
        const linksArray = Object.keys(linksMap);
        for (const link of linksArray){
            links.push(<Link name={link} alias={linksMap[link]} key={nanoid()} />)
        }
        links.push(<NavLink onClick={onClickAccount} key={nanoid()} className="account_logo" to="/account"><img src="./icons/header/‏‏account_icon__header.png" alt="account_logo" key={nanoid()}/>
        </NavLink>)
        return links
    };
    const links = getHeaderLinks(headerRoutes);
    return (
        <div className="header__container">
            <div className="header">
                <img className="header__logo" src="./icons/header/logo.png" alt="logo" onClick={onClickLogo} />
                 <div className="nav__bar">
                    {links.length > 0 && links.map((e, i) => (
                        links[i]
                    ))}
                </div>
            </div>
            {userData.loggedIn && <div className="logout" onClick={onClickLogout}>התנתק</div>}
            {!isLoaded && <LoaderContainer />}
        </div>
    )
}
