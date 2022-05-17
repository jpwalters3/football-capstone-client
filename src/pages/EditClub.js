import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { GetPlayerData } from '../api/GetPlayerData'
import EditClubForm from '../components/EditClubForm'

const EditClub = () => {

  const [club, setClub] = 
  useState({
    clubId: 1,
    name: "",
    foundingDate: "1970-01-01",
    city: ""
  });

  useEffect(()=>{
    GetPlayerData(urlparams.get('id'), setClub)
  }, [])

    let urlparams = new URLSearchParams(window.location.search)
  return (
    <div>
        <Header />
        <p>TODO: PUT fetch request</p>

      <EditClubForm club = {club}/>
    </div>
  )
}

export default EditClub