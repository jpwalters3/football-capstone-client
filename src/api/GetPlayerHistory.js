export async function GetPlayerHistory(id, set){
    fetch("http://localhost:5101/api/player/" + id + "/history")
        .then(response => {
            if(response.status !== 200){
                alert(`Error ${response.status}: ${response.statusText}`);
                return Promise.reject("error");
            }
            return response.json();
        })
        .then(json =>{
            set(json);
        })
}

export async function PostHistory(history, token){
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(history)
    }
    
    fetch("http://localhost:5101/api/history", init)
        .then(response => {
            if(response.status == 401){
                alert(`Error ${response.status}: ${response.statusText}\nHistory not made. Must be logged in as Admin to perform this task.`);
                return Promise.reject(response.status);
            }
            else if(response.status !== 201){
                alert ("Error " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json=>{
            alert ("Successfully added new entry " + json.historyId);
        })

}

export async function EditHistory(history, token){
    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(history)
    };

    fetch("http://localhost:5101/api/history", init)
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
            alert(json.historyId + " updated");
        })
}

export async function DeleteHistory(id, token){
    const init = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    }

    fetch("http://localhost:5101/api/history/" + id, init)
    .then(response => {
        if(response.status == 401){
            alert(`Error ${response.status}: ${response.statusText}\nDelete unsuccessful. Must be logged in as Admin to perform this task.`);
            return Promise.reject(response.status);
        }
        else if(response.status !== 200){
            alert("error: " + response.status);
        }
        else alert("entry " + id + " deleted")
    })
}



