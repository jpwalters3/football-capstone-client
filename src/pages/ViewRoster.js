import React from 'react'
import Header from '../components/Header'
import ClubRoster from '../components/ClubRoster'

const ViewRoster = () => {
    let urlparams = new URLSearchParams(window.location.search)
  return (
    <div>
        <Header />
        <ClubRoster id = {urlparams.get('id')} />
        <h3>Team {urlparams.get('id')} Roster Display</h3>
        <p>TODO: get request by id calling stored proceedure for player statistics by team</p>
        <p>TODO: display for players</p>
        <p>TODO: Add Edit and Delete page links for players</p>
        <p>TODO: Add View player history navigation</p>
        
    </div>
  )
}

export default ViewRoster
