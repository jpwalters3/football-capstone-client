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