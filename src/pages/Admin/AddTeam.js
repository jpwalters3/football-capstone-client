import React from 'react'
import Header from '../../components/Header'
import { useState } from 'react'
import { PostTeam } from '../../api/Club'
const AddTeam = () => {

  function submitHandler(e){
    e.preventDefault();
    const team = {
      name: document.getElementById('name').value,
      foundingDate: document.getElementById('founding-date').value,
      city: document.getElementById('city').value
    };
    PostTeam(team);
  }
  return (
    <div>
        <Header/>
        <p>STRETCH: user image upload</p>
      <form onSubmit = {submitHandler}>
          <label>Name: </label>
          <input type = "text" id = "name"/> <br/>
          <label>Founding Date: </label>
          <input type = "date" id = "founding-date"/> <br/>
          <label>City: </label>
          <input type = "text" id ="city"/> <br/>
          <input type = "submit" value = "Add Team" />
      </form>
    </div>
  )
}

export default AddTeam
