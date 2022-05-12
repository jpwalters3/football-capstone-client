import React from 'react'
import Header from '../components/Header'

const ViewSchedule = () => {
    let urlparams = new URLSearchParams(window.location.search)
  return (
    <div>
      <Header />
      <h3> Team {urlparams.get('id')} Schedule</h3>
    </div>
  )
}

export default ViewSchedule
