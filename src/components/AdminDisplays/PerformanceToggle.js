import React from 'react'
import { useState, useEffect } from 'react'
import { GetPerformance } from '../../api/Performance'
import Stats from './Stats'
import EditStats from './EditStats'

const PerformanceToggle = ({matchId}) => {
    const [editMode, setEditMode] = useState(false);
    const urlparams = new URLSearchParams(window.location.search);

    const [performance, setPerformance] = 
        useState({
            shotsOnTarget: 0,
            shots: 0,
            goals: 0,
            assists: 0,
            passesCompleted: 0,
            passes: 0,
            dribblesSucceeded: 0,
            dribbles: 0,
            tacklesSucceeded: 0,
            tackles: 0,
            saves: 0,
            cleanSheet: false
        });
        useEffect(()=>{
            GetPerformance(matchId, urlparams.get('id'), setPerformance);
        },[performance])
  return (
    <>
      {editMode ? <EditStats performance = {performance} toggle = {setEditMode}/> : <Stats performance = {performance} toggle = {setEditMode}/>}
    </>
  )
}

export default PerformanceToggle
