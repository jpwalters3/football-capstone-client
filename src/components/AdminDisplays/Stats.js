import React from 'react'
import { PencilAltIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import { GetPerformance } from '../../api/Performance'


const Stats = ({performance, toggle}) => {


    function clickHandler(){
        toggle(true);
    }

  return (
    <table>
        <tbody className = "admin-stats-table">
            <tr>Shots On Target: {performance.shotsOnTarget} / {performance.shots}</tr>
            <tr>Goals: {performance.goals}</tr>
            <tr>Assists: {performance.assists}</tr>
            <tr>Completed Passes: {performance.passesCompleted} / {performance.passes}</tr>
            <tr>Successful Dribbles: {performance.dribblesSucceeded} / {performance.dribbles} </tr>
            <tr>Successful Tackles: {performance.tacklesSucceeded} / {performance.tackles}</tr>
            <tr>Saves: {performance.saves}</tr>
            {performance.cleanSheet ? <tr>Clean Sheet: yes</tr> : <tr>Clean Sheet: no</tr>}
            <tr><button onClick = {clickHandler}><PencilAltIcon className={"inline h-10 w-10 text-purple-500"}/></button></tr>
        </tbody>
    </table>
  )
}

export default Stats
