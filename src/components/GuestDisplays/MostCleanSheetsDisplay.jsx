import React, {useState, useEffect} from 'react';
//import '../styles/mostCleanSheets.css'

const MostCleanSheetsDisplay = ({mostCleanSheets}) => {
    return(
        <>
            <tr>
                <td className='club'>{mostCleanSheets.clubName}</td>
                <td className='name'>{mostCleanSheets.playerName}</td>
                <td className='cleanSheets'>{mostCleanSheets.totalCleanSheets}</td>
            </tr>
        </>
    );
} 

export default MostCleanSheetsDisplay;