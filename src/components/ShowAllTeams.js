import React from 'react'
import { Link } from 'react-router-dom'

const ShowAllTeams = () => {
  return (
    <div>
      <Link to = "/AddTeam"><button>Add Team</button></Link>
      <h3>Show All Teams</h3>
      <p>TODO: add GET request for all teams</p>
      <p>TODO: display team data</p>
      <p>TODO: navigation for DELETE, UPDATE</p>
    </div>
  )
}

export default ShowAllTeams
