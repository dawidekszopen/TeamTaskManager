import * as React from "react";
import {Link} from "wouter";


const MainPage: React.FC = () => {
    return(
        <>
            <h1><b>TT</b> Manager</h1>
            <h2>Hello in TT Manager</h2>

            <p>Do you want to <Link to="/login" >Log in</Link> or <Link to="/register" >Register</Link></p>

        </>
    )
}

export default MainPage