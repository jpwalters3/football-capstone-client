export async function GetClubRecords(set){
    fetch("http://localhost:5101/api/reports/clubs")
        .then(response => {
            if(response.status !== 200){
                alert("Error: status " + response.status);
                return Promise.reject("error");
            }
            return response.json();
        })
        .then(json =>{
            console.log(json);
            set(json);
        })
}