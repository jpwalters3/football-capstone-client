//to be in app.js
import React from "react";
import {useState, useEffect} from "react";
import { AdminContext } from '../App';
import { TokenContext } from '../App';

export async function GetToken(loginCredentials){

    const [token, setToken] = React.useContext(TokenContext);
    const [isAdmin, setIsAdmin] = React.useContext(AdminContext);

    const init = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(loginCredentials)
    }

    fetch("http://localhost:5101/api/auth/login", init)
        .then(response => {
            if(response.status !== 200){
                alert(`Error ${response.status}: ${response.statusText}`);
                // setToken("errorToken");
                return Promise.reject("error");
            }
            return response.json();
        })
        .then(json =>{
            setToken(json);
            setIsAdmin(true);
        })
        .catch((error)=> {
            console.log(error);
        })
}