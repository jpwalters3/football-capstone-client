import React from 'react'
import { Link } from 'react-router-dom'

const AdminOptions = ({dataType}) => {
  return (
    <div>
      <Link to = {"/Add" + dataType}><button>Add</button></Link>
      <Link to = {"/Edit" + dataType}><button>Edit</button></Link>
      <Link to = {"/Delete" + dataType}><button>Remove</button></Link>
    </div>
  )
}

export default AdminOptions
