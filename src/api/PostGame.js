export async function PostGame(game){
    await alert ('WHERE ARE YOU??????')
    await alert('game: ' + JSON.stringify(game))
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(game)
    }

    await fetch("http://localhost:5101/api/match", init)
        .catch(r =>{
            alert('failure')
        })
        .then(response => {
            alert('hello')
            if(response.status !== 201){
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