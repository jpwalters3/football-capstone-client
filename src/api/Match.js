export async function GetAllGames(set){
    fetch("http://localhost:5101/api/match")
    .then(response =>{
        if(response.status !== 200){
            alert("error" + response.status + ": " + response.body)
            return Promise.reject(response.status);
        }
        return response.json();
    })
    .then( json =>{
        set(json);
    })
}

export async function DeleteGame(id){
    const init = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }

    fetch("http://localhost:5101/api/match/" + id, init)
    .then(response => {
        if(response.status !== 200){
            alert("error: " + response.status);
        }
        else alert("player " + id + " deleted")
    })
}

export async function PostGame(game){
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(game)
    }

    await fetch("http://localhost:5101/api/match", init)
        .then(response => {
            if(response.status != 201){
                alert ("Error")
                return Promise.reject(response.status)
            }
            return response.json();
        })
        .then(json=>{
            alert ("Successfully added new match " + json.playerId);
        })
}

export async function GetClubSchedule(id,set){
    fetch("http://localhost:5101/api/match/club/" + id)
    .then(response =>
        {
            if (response.status !== 200){
                alert ("error: " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
    .then(json => {
        set(json);
    })
}