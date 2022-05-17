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