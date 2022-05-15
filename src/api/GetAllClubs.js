export async function GetAllClubs(set){
    fetch("http://localhost:5101/api/club")
    .then(response => {
        if(response.status !== 200){
            alert("Error: status " + response.status);
            return Promise.reject("error");
        }
        return response.json();
    })
    .then(json =>{
        set(json);
    })
}