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