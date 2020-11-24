import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import './404.css'
import uhOh from '../../img/uhoh-cat.gif'

export default function NotFound() {
  const history = useHistory()

  const handleClick = () => {
    history.push('/')
  }


  return (
    <div className="not-found">
      <h1>Uh Oh! <br /> It looks like this page doesn't exist. Let's try something else.</h1>
      <img src={uhOh} alt="Cat with shocked face and text that says uh oh"/>
      <button onClick={handleClick}> Go Back Home </button>
    </div>
  )
}
