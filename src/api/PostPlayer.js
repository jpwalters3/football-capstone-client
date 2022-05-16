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
            alert(response.json());
            return response.json();
        })
        .then(json=>{
            alert ("Successfully added new player " + json.playerId);
        })

}