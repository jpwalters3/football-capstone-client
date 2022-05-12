import React from 'react'

const PlayerStat = ({playerStat}) => {
    return(
        <tr>
            <td>{playerStat.shots}</td>
            <td>{playerStat.shotsOnTarget}</td>
            <td>{playerStat.goals}</td>
            <td>{playerStat.assists}</td>
            <td>{playerStat.saves}</td>
            <td>{playerStat.fouls}</td>
            <td>{playerStat.dribbleSuccessRate}</td>
            <td>{playerStat.passCompletionRate}</td>
            <td>{playerStat.tackleSuccessRate}</td>
        </tr>
    )
}

export default PlayerStat