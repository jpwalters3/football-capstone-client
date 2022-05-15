export async function GetPlayerData(id, set){
    const url = "http://localhost:5101/api/player/" + id;
    fetch(url)
    .then(response => {
        if(response.status != 200){
            alert("error: " + response.statusText);
            return Promise.reject(response.status);
        }
        return response.json();
    })
    .then(json => set(json))
}