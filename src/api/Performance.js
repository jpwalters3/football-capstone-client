export async function GetPlayerPerformance(id, set){
    fetch("http://localhost:5101/api/performance/" + id)
        .then(response=>{
            if(response.status !== 200){
                alert("error: " + response.status)
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json=>{
            set(json);
        })
}

export async function GetPerformance(matchId, playerId, set){
    fetch("http://localhost:5101/api/performance/" + matchId + "/" + playerId)
    .then(response=>{
        if(response.status !== 200){
            alert("error: " + response.status)
            return Promise.reject(response.status);
        }
        return response.json();
    })
    .then(json=>{
        set(json);
    })
}

export async function PostPerformance(performance, token){
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(performance)
    }
    
    fetch("http://localhost:5101/api/performance", init)
        .then(response => {
            if(response.status == 401){
                alert(`Error ${response.status}: ${response.statusText}\nEntry not made. Must be logged in as Admin to perform this task.`);
                return Promise.reject(response.status);
            }
            else if(response.status !== 201){
                alert ("Error " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json=>{
            alert ("Entry added");
        })

}

export async function EditPerformance(performance, token){
    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(performance)
    };

    fetch("http://localhost:5101/api/performance", init)
        .then(response=>{
            if(response.status == 401){
                alert(`Error ${response.status}: ${response.statusText}\nEdit unsuccessful. Must be logged in as Admin to perform this task.`);
                return Promise.reject(response.status);
            }
            else if(response.status !== 200){
                alert("error: " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json=>{
            alert(json.playerId + " updated");
        })
}


