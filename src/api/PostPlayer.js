export async function PostPlayer(player){
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(player)
    }
    alert(player.firstName);
    
    fetch("http://localhost:5101/api/player", init)
        .then(response => {
            alert("hello from fetch");
            if(response.status != 201){
                alert ("Error " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json=>{
            alert("hello from second then");
            alert ("Successfully added new player " + json.playerId);
        })

}