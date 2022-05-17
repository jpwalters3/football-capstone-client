export async function GetClubSchedule(id,set){
    fetch("http://localhost:5101/api/match/club/" + id)
    .then(response =>
        {
            if (response.status !== 200){
                alert ("error: " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
    .then(json => {
        set(json);
    })
}