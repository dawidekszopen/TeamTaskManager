import {useState} from "react";
import * as React from "react";
import axios from "axios";
import {useLocation} from "wouter";

const url = "http://localhost:5000/users";
const Register: React.FC = () => {
    const [_, navi] = useLocation()

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try{
            const resp = await axios.post(url, {firstName: firstName, lastName: lastName, email: email, password: pass});
            sessionStorage.setItem('createdAccount', 'you successfully created account')
            navi("/login")
            console.log(resp);
        }catch (e) {
            console.error(e)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <br/>
            <input
                placeholder="First name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <br/>
            <input
                placeholder="Last name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <br/>
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
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
            <br/>
            <input type='submit'/>
        </form>
    )
}
export default Register