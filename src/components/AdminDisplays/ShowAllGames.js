import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GetAllGames } from '../../api/Match';
import AdminMatchDisplay from './AdminMatchDisplay';
import {PlusIcon} from '@heroicons/react/solid'
import AddGame from '../Forms/AddGame'

const ShowAllGames = () => {
    const [matches, setMatches] = useState([{}]);
    const [show, setShow] = useState(false)
    useEffect(()=>{
        GetAllGames(setMatches);
    }, [matches])
    
    function addClickHandler(){
      setShow(!show);
    }

  return (
    <div>
      <div onClick = {addClickHandler}>
        <PlusIcon className={"inline h-10 w-10 text-purple-500"}/>
        {show && <AddGame />}
      </div>
      <table>
          <tbody>
              {matches.map( (m) => <AdminMatchDisplay match = {m}/>)}
          </tbody>
      </table>
    </div>
  )
}

export default ShowAllGames
