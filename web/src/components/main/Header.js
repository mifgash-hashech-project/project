import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { DataContext } from '../../contexts/DataContext';
import { logoutAction, setWindowAction } from '../../actions/UserActions';
import { logout } from '../../server/login';
import { getAllData } from '../../server/utils';
import LoaderContainer from './LoaderContainer';
import { setDataAction } from '../../actions/DataActions';
import Link from "./Link";
import {nanoid} from "nanoid";

export default function Header() {
    const { userData, userDataDispatch } = useContext(UserContext);
    const { contentDataDispatch } = useContext(DataContext);
    const [componentOn, setComponentOn] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();

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

    const headerRoutes = {
        "roles": "תפקידים",
        "contact": "צור קשר",
        "want-ads": "דרושים",
        "shifts": "משמרות",
        "branches": "סניפים",
        "deliveries": "משלוחים",
        "products": "מוצרים",
        "about": "אודות",
    }

    const onClickLogo = () => {
        history.push('/products');
    };

    const onClickLogout = async () => {
        try {
            await logout(userData.token, userData.isAdmin);
            userDataDispatch(logoutAction());
            history.push('/movies');
        } catch (err) {
            console.log(err)
        }

    };

    const getHeaderLinks = (linksMap)=> {
        const links = [];
        const linksArray = Object.keys(linksMap);
        for (const link of linksArray){
            links.push(<Link name={link} alias={linksMap[link]} key={nanoid()}/>)
        }
        links.push(<NavLink key={nanoid()} className="account_logo" to="/account"><img src="./icons/header/‏‏account_icon__header.png" alt="account_logo" key={nanoid()}/>
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
