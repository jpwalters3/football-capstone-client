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
            alert(JSON.stringify(player));
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