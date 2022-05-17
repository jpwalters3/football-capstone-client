import React from 'react'
import Header from '../../components/Header'
import ViewClubSchedule from '../../components/GuestDisplays/ViewClubSchedule'

const ViewSchedule = () => {
    let urlparams = new URLSearchParams(window.location.search)
  return (
    <div>
      <Header />
      <h3> Team {urlparams.get('id')} Schedule</h3><br/>
      <ViewClubSchedule id = {urlparams.get('id')}/>
    </div>
  )
}

export default ViewSchedule
