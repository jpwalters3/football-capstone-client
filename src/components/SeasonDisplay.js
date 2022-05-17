import React from 'react'
import StatsDisplayBar from '../components/StatsDisplayBar'
import { Link } from 'react-router-dom'

const SeasonDisplay = ({season}) => {
return (
    <tr className = "season-display" key = {season.seasonId}>
      <td key = {season.seasonId + "year"}> {season.year}</td>
      <td key = {season.seasonId + "isActive"}>  {season.isActive}  </td>
      <td key = {season.seasonId + "links"}>         
      <StatsDisplayBar/>
      </td>
    </tr>
  )
}

export default SeasonDisplay