import React from 'react'
import { GetPlayerPerformance } from '../../api/Performance'
import { GetClubSchedule } from '../../api/Match'
import { useState, useEffect } from 'react'
import AdminPerformance from './AdminPerformance'
import AddPerformance from '../Forms/AddPerformance'
import matchers from '@testing-library/jest-dom/matchers'

const PlayerPerformancesTable = ({player}) => {

    const urlparams = new URLSearchParams(window.location.search);
    const [games, setGames] = useState([{}])
    const [showData, setShowData] = useState(false);

    useEffect(()=>{
        GetClubSchedule(player.clubId, setGames)
    },[games])

    

  return (
    <div>
        <table>
            <thead>
                <tr>
                <th colSpan = "2">Games Played</th>
                </tr>
            </thead>
            <tbody className = "admin-performance-table">
                {games.map((g) => 
                    <AdminPerformance game = {g}/>
                )}
            </tbody>
        </table>

    </div>
  )
}

export default PlayerPerformancesTable
