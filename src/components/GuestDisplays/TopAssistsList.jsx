import React, {useState, useEffect} from 'react';
import TopAssistsDisplay from './TopAssistsDisplay';
import { GetTopAssists } from '../../api/TopStats';
import '../../styles/History.css'

    
const TopAssistsList = ({seasonId}) => {
    const [topAssistsList, setTopAssistsList] = useState([{}]);
    useEffect(() => { 
        GetTopAssists(seasonId, setTopAssistsList)
    }, [])
    return(
        <tr>
            <td colSpan="9">
                <table>
                    <tbody>
                        <tr>
                            <th className='club'>Club</th><th className='name'>Name</th><th className='stat'>Assists</th>
                        </tr>
                        {topAssistsList.map(a => <TopAssistsDisplay topAssists = {a}/>)}
                    </tbody>
                </table>
            </td>
        </tr>
    )
}

export default TopAssistsList;