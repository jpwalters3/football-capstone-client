import React from 'react'
import Header from '../components/Header'

const ViewRoster = () => {
    let urlparams = new URLSearchParams(window.location.search)
  return (
    <div>
        <Header />
        <h2>Team {urlparams.get('id')} Roster Display</h2>
        
    </div>
  )
}

export default ViewRoster
