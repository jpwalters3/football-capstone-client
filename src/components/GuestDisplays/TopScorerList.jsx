import React, {useState, useEffect} from 'react';
import TopScorerDisplay from './TopScorerDisplay';
import { GetTopScorer } from '../../api/TopStats';
import '../../styles/Stat.css'

    
const TopScorerList = ({seasonId}) => {
    const [topScorerList, setTopScorerList] = useState([{}]);
    useEffect(() => { 
        GetTopScorer(seasonId, setTopScorerList)
    }, [])
    return(
        <tr>
            <td colSpan="9">
                <table>
                    <tbody>
                        <tr>
                            <th className='club'>Club</th><th className='name'>Name</th><th className='stat'>Goals</th>
                        </tr>
                        {topScorerList.map(s => <TopScorerDisplay topScorer = {s}/>)}
                    </tbody>
                </table>
            </td>
        </tr>
    )
}

export default TopScorerList;