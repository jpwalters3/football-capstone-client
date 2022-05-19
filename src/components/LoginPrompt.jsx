import React, {useState} from 'react';
import {GetToken} from '../api/GetToken';
import { Link } from 'react-router-dom'
import { AdminContext } from '../App';
import { TokenContext } from '../App';
import '../styles/Form.css'

const LoginPrompt = () => {
    const [token, setToken] = React.useContext(TokenContext);
    const [isAdmin, setIsAdmin] = React.useContext(AdminContext);

    const [loginCredentials, setLoginCredentials] = useState({
        //For demo purposes these are set to admin credentials
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
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm" id ="update-club">
                <form>
                    <div class="form-group mb-2">
                        <label>Username: </label>
                        <input type = "text" value = {loginCredentials.userName} onChange = {(u) => {loginCredentialsSetter("userName", u.currentTarget.value)}}
                                class ="form-controll border border-solid border-gray-300" required/> 
                    </div>
                    <div class="form-group mb-5">
                        <label>Password: </label>
                        <input type = "password" value = {loginCredentials.password} onChange = {(p) => {loginCredentialsSetter("password", p.currentTarget.value)}}
                                class ="form-controll border border-solid border-gray-300" required/>
                    </div>
                    <div class="form-group">
                        <Link to ="/Home">
                            <button onClick = {()=>GetToken(loginCredentials, setToken, setIsAdmin)} class="
                                px-6
                                py-2.5
                                bg-blue-600
                                text-white
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                rounded
                                shadow-md
                                hover:bg-blue-700 hover:shadow-lg
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                active:bg-blue-800 active:shadow-lg
                                transition
                                duration-150
                                ease-in-out">Log In</button>
                        </Link>
                    </div>
                </form>
            </div>
                <Link to ="/Home">
                    <button class = {"text-blue-600 hover:text-blue-700 hover:shadow-lg mt-2"} onClick = {()=>{setIsAdmin(false); setToken("")}}>
                        Continue As Guest
                    </button>
                </Link>
        </div>
    )
}

export default LoginPrompt