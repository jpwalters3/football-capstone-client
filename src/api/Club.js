export async function GetAllClubs(set){
    fetch("http://localhost:5101/api/club")
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

export async function EditClub(club){
    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(club)
    };

    fetch("http://localhost:5101/api/club", init)
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

export async function PostTeam(club){
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(club)
    } 
    alert(JSON.stringify(club));
    fetch("http://localhost:5101/api/club", init)
        .then(response => {
            if(response.status !== 201){
                alert ("Error " + response.status);
                return Promise.reject(response.body);
            }
            return response.json();
        })
        .then(json=>{
            alert ("Successfully added club ID:" + json.clubId);
        })
        .catch(m => alert(m));

}

export async function GetPlayersByTeam(id, set){
    fetch("http://localhost:5101/api/club/" + id + "/player")
        .then(response => {
            if(response.status != 200){
                alert("error: " + response.statusText);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json => set(json));
}

export async function GetClubRecords(set){
    fetch("http://localhost:5101/api/reports/clubs")
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

export async function GetClubData(id, set){
    const url = "http://localhost:5101/api/club/" + id;
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

export async function DeleteClub(id){
    const init = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }

    fetch("http://localhost:5101/api/club/" + id, init)
    .then(response => {
        if(response.status !== 200){
            alert("error: " + response.status);
        }
        else alert("Team " + id + " deleted")
    })
}