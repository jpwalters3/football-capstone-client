export async function GetMostCleanSheets(id, set){
    fetch("http://localhost:5101/api/reports/MostCleanSheets/" + id)
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