export async function PostPlayer(player, token){
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(player)
    }
    
    fetch("http://localhost:5101/api/player", init)
        .then(response => {
            if(response.status == 401){
                alert(`Error ${response.status}: ${response.statusText}\nPlayer not made. Must be logged in as Admin to perform this task.`);
                return Promise.reject(response.status);
            }
            else if(response.status !== 201){
                alert ("Error " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json=>{
            alert ("Successfully added new player " + json.playerId);
        })

}

export async function EditPlayer(player, token){
    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(player)
    };

    fetch("http://localhost:5101/api/player", init)
        .then(response=>{
            if(response.status == 401){
                alert(`Error ${response.status}: ${response.statusText}\nEdit unsuccessful. Must be logged in as Admin to perform this task.`);
                return Promise.reject(response.status);
            }
            else if(response.status !== 200){
                alert("error: " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json=>{
            alert(json.playerId + " updated");
        })
}

export async function DeletePlayer(id, token){
    const init = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    }

    fetch("http://localhost:5101/api/player/" + id, init)
    .then(response => {
        if(response.status == 401){
            alert(`Error ${response.status}: ${response.statusText}\nDelete unsuccessful. Must be logged in as Admin to perform this task.`);
            return Promise.reject(response.status);
        }
        else if(response.status !== 200){
            alert("error: " + response.status);
        }
        else alert("player " + id + " deleted")
    })
}

export async function GetAllPlayers(set){
    fetch("http://localhost:5101/api/player")
    .then(response => {
        if(response.status !== 200){
            alert("Error: status " + response.status);
            return Promise.reject("error");
        }
        return response.json();
    })
    .then(json =>{
        set(json);
    })
}

export async function GetPlayerData(id, set){
    const url = "http://localhost:5101/api/player/" + id;
    await fetch(url)
    .then(response => {
        if(response.status != 200){
            alert("error " + response.status + ": " + response.body);
            return Promise.reject(response.status);
        }
        return response.json();
    })
    .then(json => set(json))
}

export async function GetPlayerStats(id, set){
    fetch("http://localhost:5101/api/reports/" + id)
        .then(response => {
            if(response.status !== 200){
                alert("Error: status " + response.status);
                return Promise.reject("error");
            }
            return response.json();
        })
        .then(json =>{
            set(json);
        })
}