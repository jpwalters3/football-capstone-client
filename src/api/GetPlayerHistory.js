export async function GetPlayerHistory(id, set){
    fetch("http://localhost:5101/api/player/" + id + "/history")
        .then(response => {
            if(response.status !== 200){
                alert("Error " + response.status + ": " + response.body);
                return Promise.reject("error");
            }
            return response.json();
        })
        .then(json =>{
            set(json);
        })
}