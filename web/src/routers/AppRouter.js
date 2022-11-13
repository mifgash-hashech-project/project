import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Account from '../components/account/Account';
import Footer from '../components/main/Footer';
import Header from '../components/main/Header';
import About from '../components/about/About';
import ModalContextProvider from '../contexts/ModalContext';
import UserContextProvider from '../contexts/UserContext';
import DataContextProvider from '../contexts/DataContext';
import Products from "../components/products/Products";
import WantAds from "../components/want-ads/WantAds";
import Branches from "../components/branches/Branches";
import Contact from "../components/contact/Contact";
import Shifts from "../components/shifts/Shifts";
import Roles from "../components/roles/Roles";


const branchesURL = "https://www.10bis.co.il/next/restaurants/menu/delivery/30127/%D7%9E%D7%A4%D7%92%D7%A9-%D7%94%D7%A9%D7%99%D7%99%D7%97"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <ModalContextProvider>
                <UserContextProvider>
                    <DataContextProvider>
                        <Header />
                        <Switch>
                            <Route path="/" exact>
                                <Redirect to="/products" />
                            </Route>
                            <Route path="/about" component={About} />
                            <Route path="/products" component={Products} />
                            <Route path="/roles" component={Roles} />
                            <Route path="/account" component={Account} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/want-ads" component={WantAds} />
                            <Route path="/shifts" component={Shifts} />
                            <Route path="/branches"  component={Branches}/>
                            <Route path="/deliveries" component={() => {
                                window.location.href = branchesURL;
                                return null;
                            }}/>
                            <Route path="*" component={Products} />
                        </Switch>
                        <Footer />
                    </DataContextProvider>
                </UserContextProvider>
            </ModalContextProvider>
        </BrowserRouter >
    )
}
