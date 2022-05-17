import React from 'react'
import Header from '../../components/Header'
import ClubRoster from '../../components/GuestDisplays/ClubRoster'

const ViewRoster = () => {
    let urlparams = new URLSearchParams(window.location.search)
  return (
    <div>
        <Header />
        <h3 className = "font-serif text-2xl mb-5 mt-15">Team {urlparams.get('id')} Roster Display</h3>
        <ClubRoster id = {urlparams.get('id')} />
        <p>TODO: Roster Should only show active players</p>
    </div>
  )
}

export default ViewRoster
