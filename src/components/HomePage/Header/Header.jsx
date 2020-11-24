import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import HeaderLogo from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/logo-white.svg'
import './Header.css'

export default function Header() {
  const [names, setNames] = useState(['', ''])
  const [namesList, setNamesList] = useState(['', ''])
  //Keep track of our browser history so we can redirect to search results
  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(data => {
      setNames(data.names)
      setNamesList(data.names)
    })
  }, [])

  const handleSelect = (e) => {
    const selection = e.target.innerText
    history.push(`/breeds/search/${selection}`)
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    //Store user value in search bar
    const userInput = document.querySelector('input.search').value
    //Search for user selected breed
    history.push(`/breeds/search/${userInput}`)
  }

  //Change list items as user types
  const handleChange = (e) => {
    const userInput = document.querySelector('input.search').value.toLowerCase()

    generateNamesList(userInput)
  }

  const generateNamesList = (userInput  = '') => {
    if(userInput === '') {
      return setNamesList(names)
    }else {
      setNamesList(names.filter(name => name.toLowerCase().startsWith(userInput)))
    }
  }

  return (  
    <div className="header">
      <img src={HeaderLogo} alt="" className="logo"/>
      <p className="subtitle">Get to know more about your cat breed</p>
        <form action="" className="search" onSubmit={handleSubmit}>
          <input type="text" className="search" onSubmit={handleSubmit} onChange={handleChange} placeholder="Search"/>
          <div className="names-list">
            <ul className="search">
              {namesList.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
          </div>
        </form>
    </div>
  )
}
