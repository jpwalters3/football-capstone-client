//to be in app.js
import React from "react";
import {useState, useEffect} from "react";

export async function GetToken(loginCredentials, set){
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
                //set("errorToken");
                return Promise.reject("error");
            }
            return response.json();
        })
        .then(json =>{
            set(json);
        })
}