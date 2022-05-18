export async function PostPlayer(player){
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(player)
    }
    
    fetch("http://localhost:5101/api/player", init)
        .then(response => {
            if(response.status !== 201){
                alert ("Error " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json=>{
            alert ("Successfully added new player " + json.playerId);
        })

}

export async function EditPlayer(player){
    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(player)
    };

    fetch("http://localhost:5101/api/player", init)
        .then(response=>{
            if(response.status !== 200){
                alert("error: " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json=>{
            alert(json.playerId + " updated");
        })
}

export async function DeletePlayer(id){
    const init = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }

    fetch("http://localhost:5101/api/player/" + id, init)
    .then(response => {
        if(response.status !== 200){
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