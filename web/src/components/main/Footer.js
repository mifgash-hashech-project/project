import React from 'react';
import FooterIcon from './FooterIcon';
import {headerRoutes} from "./Header";
import Product from "../products/Product";
import {nanoid} from "nanoid";

export default function Footer() {
    const footerPaths = Object.keys(headerRoutes)
    return (
        <div className="footer__container">
            <div className="footer">
                {footerPaths.length >0  && footerPaths.map((e, i) => (
                    <FooterIcon path={e} name={headerRoutes[e]} key={nanoid()}/>
                ))}

            </div>

        </div>
    )
}
