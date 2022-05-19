import React from 'react'
import {useState} from 'react'
import {PlusIcon, ArrowCircleDownIcon} from '@heroicons/react/solid'
import Stats from './Stats'
import PerformanceToggle from './PerformanceToggle'

const AdminPerformance = ({game}) => {

    const [showData, setShowData] = useState(false);

    function clickHandler(){
        setShowData(!showData)
    }

  return (
    <>
    <tr>
        <td>{game.visitingClubName} @ {game.homeClubName} </td><td><button onClick = {clickHandler}><ArrowCircleDownIcon className={"inline h-10 w-10 text-purple-500"}/></button></td>
    </tr>
    <tr>
        <td colSpan="2">
        {showData && <PerformanceToggle matchId = {game.matchId}/>}
        </td>
    </tr>

    </>
  )
}

export default AdminPerformance
