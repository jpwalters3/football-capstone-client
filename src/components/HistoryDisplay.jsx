import React, {useState, useEffect} from 'react';
//import '../styles/history.css'

const HistoryDisplay = ({history}) => {
    return(
        <>
            <tr>
                <td className='id'>{history.historyId}</td>
                <td className='entry'>{history.historyEntry}</td>
            </tr>
        </>
    );
}

export default HistoryDisplay;