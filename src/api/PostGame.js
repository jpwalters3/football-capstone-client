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
            alert(response.json());
            return response.json();
        })
        .then(json=>{
            alert ("Successfully added new match " + json.playerId);
        })
}