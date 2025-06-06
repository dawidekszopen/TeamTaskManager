import {useState} from "react";
import * as React from "react";
import axios from "axios";
import FrontPage from "./FrontPage.tsx";
import {useLocation} from "wouter";

const Login: React.FC = () =>{
    const [_, navigation] = useLocation()

    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [info, setInfo] = useState("")


    if(sessionStorage.getItem('createdAccount') != null){
        setInfo(`${sessionStorage.getItem('createdAccount')}`)
        sessionStorage.removeItem('createdAccount')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try{
            const resp = await axios.post(`http://localhost:5000/users/login`, {email: email, password: password});
            sessionStorage.setItem('logged', `true`)
            sessionStorage.setItem('id', resp.data._id)
            navigation("/main-page")
        }catch (e) {
            console.error(e)
        }
    }

    return(
        <>
        <FrontPage/>
        <h1>Login</h1>
        <h2>{info}</h2>
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPass(e.target.value)}
            />
            <br/>
            <input type='submit'/>
        </form>
        </>
    )
}

export default Login