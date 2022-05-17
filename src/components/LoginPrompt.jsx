import React, {useState} from 'react';
import {GetToken} from '../api/GetToken';
import { Link } from 'react-router-dom'
import { AdminContext } from '../App';
import { TokenContext } from '../App';

const LoginPrompt = () => {
    const [token, setToken] = React.useContext(TokenContext);
    const [isAdmin, setIsAdmin] = React.useContext(AdminContext);

    const [loginCredentials, setLoginCredentials] = useState({
        userName: "admin",
        password: "adminPassword!"
    });
    const loginCredentialsSetter = (field, value) => {
        const newCredentials = {...loginCredentials};
        newCredentials[field] = value;
        setLoginCredentials(newCredentials);
    }
    return(
        <div>
            <form>
                <label>Username: </label>
                <input type = "text" value = {loginCredentials.userName} onChange = {(u) => {loginCredentialsSetter("userName", u.currentTarget.value)}}/> <br/>
                <label>Password: </label>
                <input type = "text" value = {loginCredentials.password} onChange = {(p) => {loginCredentialsSetter("password", p.currentTarget.value)}}/> <br/>
                <Link to ="/Home"><button onClick = {()=>GetToken(loginCredentials, setToken, setIsAdmin)}>Log In</button></Link>
                <br/>
                <Link to ="/Home">Continue As Guest</Link>
            </form>

        </div>
    )
}

export default LoginPrompt