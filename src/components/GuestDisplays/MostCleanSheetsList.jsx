import React, {useState, useEffect} from 'react';
import MostCleanSheetsDisplay from './MostCleanSheetsDisplay';
import { GetMostCleanSheets } from '../../api/TopStats';
import '../../styles/History.css'

    
const MostCleanSheetsList = ({seasonId}) => {
    const [mostCleanSheetsList, setMostCleanSheetsList] = useState([{}]);
    useEffect(() => { 
        GetMostCleanSheets(seasonId, setMostCleanSheetsList)
    }, [])
    return(
        <tr>
            <td colSpan="9">
                <table>
                    <tbody>
                        <tr>
                            <th className='club'>Club</th><th className='name'>Name</th><th className='stat'>Clean Sheets</th>
                        </tr>
                        {mostCleanSheetsList.map(m => <MostCleanSheetsDisplay mostCleanSheets = {m}/>)}
                    </tbody>
                </table>
            </td>
        </tr>
    )
}

export default MostCleanSheetsList;