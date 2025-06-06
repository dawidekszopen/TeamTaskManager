import { Route, useLocation } from "wouter";
// import App from "../App.tsx";
import login from "../pages/Login.tsx";
import register from "../pages/Register.tsx";
import FrontPage from "../pages/FrontPage.tsx";

import '../App.css'
import * as React from "react";
import MainPage from "../pages/MainPage.tsx";

const RouterApp: React.FC = () => {

    const [_, navigation] = useLocation()

    if(sessionStorage.getItem('logged') == "true"){
        navigation("/main-page")
    }
    else {
        sessionStorage.setItem('logged', 'false')
    }
    return(
        <>
            <Route path="/" component={FrontPage}/>
            <Route path="/login" component={login}/>
            <Route path="/register" component={register}/>
            <Route path="/main-page" component={MainPage}/>
        </>
    )
}

export default RouterApp