import React, {useState, useEffect} from 'react';
import HistoryDisplay from './HistoryDisplay';
import { GetPlayerHistory } from '../../api/GetPlayerHistory';
import '../../styles/History.css'

    
const HistoryList = ({playerId}) => {
    const [historyList, setHistoryList] = useState([{}]);
    useEffect(() => {
        GetPlayerHistory(playerId, setHistoryList)
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