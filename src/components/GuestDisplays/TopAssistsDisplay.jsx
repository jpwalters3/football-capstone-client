import React, {useState, useEffect} from 'react';
//import '../styles/topAssists.css'

const TopAssistsDisplay = ({topAssists}) => {
    return(
        <>
            <tr>
                <td className='club'>{topAssists.clubName}</td>
                <td className='name'>{topAssists.playerName}</td>
                <td className='stat'>{topAssists.totalAssists}</td>
            </tr>
        </>
    );
} 

export default TopAssistsDisplay;