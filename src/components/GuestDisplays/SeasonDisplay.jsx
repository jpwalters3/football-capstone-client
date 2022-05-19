import React, {useState, useEffect} from 'react';
import TopScorerList from './TopScorerList';
import TopAssistsList from './TopAssistsList';
import MostCleanSheetsList from './MostCleanSheetsList';
import '../../styles/Season.css'

const SeasonDisplay = ({season}) => {
    const [topStatMode, setTopStatMode] = useState('');
    return(
        <>
            <tr>
                <td className='year'>{season.year}</td>
                <td className='entry'>
                <select onChange={(e) => setTopStatMode(e.target.value)}>
        <option value = "0">Select a statistical category</option>
        <option value = "1">Goals</option>
        <option value = "2">Assists</option>
        <option value = "3">Clean Sheets</option>
      </select></td>
            </tr>

            {topStatMode === "1" && <TopScorerList seasonId={season.seasonId}/>}
            {topStatMode === "2" && <TopAssistsList seasonId={season.seasonId}/>}
            {topStatMode === "3" && <MostCleanSheetsList seasonId={season.seasonId}/>}
        </>
    );
}

export default SeasonDisplay;