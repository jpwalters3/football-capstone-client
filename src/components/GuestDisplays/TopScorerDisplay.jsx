import React, {useState, useEffect} from 'react';
//import '../styles/topScorer.css'

const TopScorerDisplay = ({topScorer}) => {
    return(
        <>
            <tr>
                <td className='club'>{topScorer.clubName}</td>
                <td className='name'>{topScorer.playerName}</td>
                <td className='stat'>{topScorer.totalGoals}</td>
            </tr>
        </>
    );
} 

export default TopScorerDisplay;