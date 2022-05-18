import React from 'react'
import {useState, useEffect} from 'react'
import {EditClub} from '../../api/Club'
import Header from '../Header'
import '../../styles/Form.css'
import { TokenContext } from '../../App';

const EditClubForm = ({club}) => {
  const [token, setToken] = React.useContext(TokenContext);

    function submitHandler(e){
        e.preventDefault();
        club.name = name;
        club.foundingDate = foundingDate;
        club.city = city;
        EditClub(club, token);
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
      <h3>Edit {club.name}</h3>
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm" id ="update-club">
        <form onSubmit = {submitHandler}>
          <div class="form-group mb-6">
            <label>Name: </label>
            <input type = "text" id = "name" value = {name} max = "49"
            onChange = {(e) => setName(e.target.value)}
            class ="form-controll border border-solid border-gray-300"/> <br/>
          </div>
          <div class="form-group mb-6">
            <label>Founding Date: </label>
            <input type = "date" id = "founding-date" value = {foundingDate.substring(0,10)}
            onChange = {(e) => setFoundingDate(e.target.value)}
            class ="form-controll border border-solid border-gray-300"/> <br/>
          </div>
          <div class="form-group mb-6">
            <label>City: </label>
            <input type = "text" id = "city" value = {city} max = "49"
            onChange = {(e)=> setCity(e.target.value)}
            class ="form-controll border border-solid border-gray-300"/> <br/>
          </div>
          <button type="submit" class="
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out">Update</button>
        </form>
      </div>
    </div>
  )
}

export default EditClubForm
