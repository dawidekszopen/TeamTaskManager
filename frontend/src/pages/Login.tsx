import {useState} from "react";
import * as React from "react";
import axios from "axios";
const url = "http://localhost:5000/users";

const Login: React.FC = () =>{

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [info, setInfo] = useState("")
    type getType = {canLogin: Boolean, _id: String}

    const [data, setData] = useState<getType[]>([])

    if(sessionStorage.getItem('createdAccount') != null){
        setInfo(`${sessionStorage.getItem('createdAccount')}`)
        console.log(sessionStorage.getItem('createdAccount'))
        sessionStorage.removeItem('createdAccount')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try{
            const resp = await axios.get(`${url}?email=${email}&password=${pass}`);
            setData([resp.data])
            sessionStorage.setItem('logged', `true`)
            sessionStorage.setItem('id', data[0]._id.toString())
        }catch (e) {
            console.error(e)
        }
        // {}
    }
    return(
        <>
            <h2>{info}</h2>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
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
        </>
    )
}

export default Login