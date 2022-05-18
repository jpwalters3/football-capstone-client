import React, {useState, useEffect} from 'react';
import TopScorerList from './TopScorerList';
//import '../styles/history.css'

const SeasonDisplay = ({season}) => {
    const [topScorerMode, setTopScorerMode] = useState(true);
    return(
        <>
            <tr>
                <td className='year'>{season.year}</td>
                <td className='entry'>
                <select>
        <option value = {()=>{setTopScorerMode(topScorerMode)}}>Goals</option>
        <option value = "2">Assists</option>
        <option value = "3">Clean Sheets</option>
      </select></td>
            </tr>

            {topScorerMode && <TopScorerList seasonId={season.seasonId}/>}
        </>
    );
}

export default SeasonDisplay;