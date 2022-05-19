import React from 'react'
import Header from '../../components/Header'
import ClubRoster from '../../components/GuestDisplays/ClubRoster'

const ViewRoster = () => {
    const urlparams = new URLSearchParams(window.location.search)
    const id = urlparams.get('id')

  return (
    <div>
        <Header />
          {id < 5 && <img src = {require('../../img/club-' + id + '-logo.png')} width = '200' class = 'pl-20'/>}
          {id > 4 && <img src = {require('../../img/club-0-logo.png')} width = '200' class = 'pl-20'/>}
        <h1 class ="text-2xl">ROSTER</h1> <br/><br/>
        <ClubRoster id = {urlparams.get('id')} />
    </div>
  )
}

export default ViewRoster
