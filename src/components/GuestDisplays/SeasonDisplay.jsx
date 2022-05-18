import React, {useState, useEffect} from 'react';
import TopScorerList from './TopScorerList';
//import '../styles/history.css'

const SeasonDisplay = ({season}) => {
    const [topStatMode, setTopStatMode] = useState('');
    const topScorerMode = useState(false)
    return(
        <>
            <tr>
                <td className='year'>{season.year}</td>
                <td className='entry'>
                <select onChange={(e) => setTopStatMode(e.target.value)}>
        <option value = "1">Goals</option>
        <option value = "2">Assists</option>
        <option value = "3">Clean Sheets</option>
      </select></td>
            </tr>

            {topStatMode === "1" && <TopScorerList seasonId={season.seasonId}/>}
        </>
    );
}

export default SeasonDisplay;