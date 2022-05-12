import React from 'react'
import Header from '../components/Header'

const ViewPlayerPerformanceList = () => {
    let urlparams = new URLSearchParams(window.location.search)
  return (
    <div>
        <Header />
        <h3>Team {urlparams.get('id')} Match Performance Display</h3>
        <p>TODO: get list of performances for player, show most recent 5</p>
        <p>TODO: shows teams and score</p>
        
    </div>
  )
}

export default ViewPlayerPerformanceList