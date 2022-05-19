export async function GetToken(loginCredentials, setToken, setIsAdmin){
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
                alert(`Error ${response.status}: ${response.statusText}\nIncorrect Admin credentials. Entering as guest.`);
                setToken("");
                setIsAdmin(false);
                return Promise.reject("error");
            }
            return response.json();
        })
        .then(json =>{
            //console.log(json);    //Testing purposes
            setToken(json.token);
            setIsAdmin(true);
        })
        .catch((error)=> {
            console.log(error);
        })
}