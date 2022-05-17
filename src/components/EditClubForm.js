import React from 'react'
import {useState, useEffect} from 'react'
import {EditClub} from '../api/EditClub'
import Header from './Header'

const EditClubForm = ({club}) => {
    function submitHandler(e){
        e.preventDefault();
        club.name = name;
        club.foundingDate = foundingDate;
        club.city = city;
        EditClub(club);
    }
    useEffect(()=>{
        setName(club.name);
        setFoundingDate(club.foundingDate);
        setCity(club.city);
    },[club])

    const [name, setName] = useState(club.name);
    const [foundingDate, setFoundingDate] = useState(club.foundingDate);
    const [city, setCity] = useState(club.city);
  return (
    <div>
      <Header/>
      <h3>Edit {club.name}</h3>
      <form onSubmit = {submitHandler}>
          <label>Name: </label>
          <input type = "text" id = "name" value = {name} onChange = {(e) => setName(e.target.value)}/> <br/>
          <label>Founding Date: </label>
          <input type = "date" id = "founding-date" value = {foundingDate} onChange = {(e) => setFoundingDate(e.target.value)}/> <br/>
          <label>City: </label>
          <input type = "text" id = "city" value = {city} onChange = {(e)=> setCity(e.target.value)}/> <br/>
          <input type = "submit" value = "Update" />
      </form>
    </div>
  )
}

export default EditClubForm
