import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import HeaderLogo from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/logo-white.svg'
import './Header.css'

export default function Header(props) {
  const [tempNames, setTempNames] = useState(['', ''])
  const [constNames, setConstNames] = useState(['', ''])
  //Keep track of our browser history so we can redirect to search results
  const history = useHistory()

 useEffect( () => {
  setTempNames(props.names)
  setConstNames(props.names)
  console.log(constNames)
 }, [props.names])


  const handleSelect = (e) => {
    const selection = e.target.innerText
    history.push(`/breeds/search/${selection}`)
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    //Store user value in search bar
    const userInput = document.querySelector('input.search').value.toLowerCase()
    console.log(userInput)

    //check if user input is valid name 
    if(constNames.find(el => el.toLowerCase() === userInput)) {
      //Search for user selected breed
    history.push(`/breeds/search/${userInput}`)
    }else {
      //else redirect to 404 not found page
      history.push('/404')
    }
  }

  //Change list items as user types
  const handleChange = (e) => {
    const userInput = document.querySelector('input.search').value.toLowerCase()
    
    //When user begins to type generate a new list view with options that match user input
    generateNamesList(userInput)
  }

  const generateNamesList = (userInput  = '') => {
    if(userInput === '') {
      return constNames
    }else {
      setTempNames(constNames.filter(name => name.toLowerCase().startsWith(userInput)))
    }
  }

  return (  
    <div className="header">
      <img src={HeaderLogo} alt="" className="logo"/>
      <p className="subtitle">Get to know more about your cat breed</p>
        <form action="" className="search" onSubmit={handleSubmit}>
          <input type="text" className="search" onSubmit={handleSubmit} onChange={handleChange} placeholder="Search" />
          <div className="names-list">
            <ul className="search">
              {tempNames.map((name, index) => <li key={index} onClick={handleSelect}>{name}</li>)}
            </ul>
          </div>
        </form>
    </div>
  )
}
