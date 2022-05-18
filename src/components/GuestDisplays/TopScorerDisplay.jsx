import React, {useState, useEffect} from 'react';
//import '../styles/topScorer.css'

const TopScorerDisplay = ({topScorer}) => {
    return(
        <>
            <tr>
                <td className='club'>{topScorer.ClubName}</td>
                <td className='name'>{topScorer.PlayerName}</td>
                <td className='goals'>{topScorer.TotalGoals}</td>
            </tr>
        </>
    );
} 

export default TopScorerDisplay;