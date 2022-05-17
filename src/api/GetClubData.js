export async function GetClubData(id, set){
    const url = "http://localhost:5101/api/club/" + id;
    await fetch(url)
    .then(response => {
        if(response.status != 200){
            alert("error " + response.status + ": " + response.body);
            return Promise.reject(response.status);
        }
        return response.json();
    })
    .then(json => set(json))
}