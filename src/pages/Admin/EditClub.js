import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { GetClubData } from '../../api/Club'
import EditClubForm from '../../components/Forms/EditClubForm'

const EditClub = () => {

  const [club, setClub] = 
  useState({
    clubId: 1,
    name: "",
    foundingDate: "1970-01-01",
    city: ""
  });

  useEffect(()=>{
    GetClubData(urlparams.get('id'), setClub)
  }, [])

    let urlparams = new URLSearchParams(window.location.search)
  return (
    <div>
        <Header />

      <EditClubForm club = {club}/>
    </div>
  )
}

export default EditClub