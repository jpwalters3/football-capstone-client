import React, {useState, useEffect} from 'react';
import HistoryDisplay from './HistoryDisplay';
import '../styles/History.css'

// const Histories = [
//     {
//         historyId:1,
//         historyEntry:"Some entry here that is like super long maybe oh my gosh this is crazy there is jut so much to say"
//     },
//     {
//         historyId:2,
//         historyEntry:"more random stuff"
//     },
//     {
//         historyId:2,
//         historyEntry:"more random stuff"
//     },
//     {
//         historyId:2,
//         historyEntry:"more random stuff"
//     }
// ]

    
const HistoryList = ({playerId}) => {
    const [historyList, setHistoryList] = useState([{}]);
    useEffect(() => {
        fetch("http://localhost:5101/api/player/" + playerId + "/history")
        .then(response => {
            if(response.status !== 200){
                alert("Error: status " + response.status);
                return Promise.reject("error");
            }
            return response.json();
        })
        .then(json =>{
            setHistoryList(json);
        })
    }, [])
    return(
        <tr>
            <td colSpan="9">
                <table>
                    <tbody>
                        <tr>
                            <th className='id'>Id</th><th className='entry'>Entry</th>
                        </tr>
                        {historyList.map(h => <HistoryDisplay history = {h}/>)}
                    </tbody>
                </table>
            </td>
        </tr>
    )
}

export default HistoryList;