import React from 'react'
import Header from '../components/Header'

const ViewSchedule = () => {
    let urlparams = new URLSearchParams(window.location.search)
  return (
    <div>
      <Header />
      <h3> Team {urlparams.get('id')} Schedule</h3><br/>
      <p>TODO: get request that gets all the games for the current season</p>
      <p>TODO: display components for player statistics</p>
    </div>
  )
}

export default ViewSchedule
