import React from 'react'
import Header from '../../components/Header'
import ViewClubSchedule from '../../components/GuestDisplays/ViewClubSchedule'

const ViewSchedule = () => {
    let urlparams = new URLSearchParams(window.location.search)
  return (
    <div>
      <Header />
      {urlparams.get('id') < 5 && <img src = {require('../../img/club-' + urlparams.get('id') + '-logo.png')} width = '200' class = 'pl-20'/>}
      {urlparams.get('id') > 4 && <img src = {require('../../img/club-0-logo.png')} width = '200' class = 'pl-20'/>}
      <h1 class = "text-2xl">SCHEDULE</h1><br/>
      <ViewClubSchedule id = {urlparams.get('id')}/>
    </div>
  )
}

export default ViewSchedule
