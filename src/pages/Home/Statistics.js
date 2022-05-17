import React from 'react'
import Header from '../../components/Header'

const Statistics = () => {
  return (
    <div>
        <Header />
        <h1 className = "text-center text-xl font-serif text-fuchshia-650">Statistics</h1>
      <p>TODO: get request that calls the stored proceedure for the top ten players in the selected statistical category</p>
      <p>TODO: display response body</p>

      <select>
        <option value = "1">Goals</option>
        <option value = "2">Assits</option>
        <option value = "3">Clean Sheets</option>
      </select>
    </div>
  )
}

export default Statistics
