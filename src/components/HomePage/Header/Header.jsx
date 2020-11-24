import React, { useState, useEffect } from 'react'
import HeaderLogo from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/logo-white.svg'
import './Header.css'

export default function Header() {
  const [names, setNames] = useState(['', ''])

  useEffect(() => {
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(data => setNames(data.names))
  }, [])

  const handleSelect = (e) => {
    console.log(e.target)
  } 

  return (  
    <div className="header">
      <img src={HeaderLogo} alt="" className="logo"/>
      <p className="subtitle">Get to know more about your cat breed</p>
        <form action="" className="search">
          <input type="text" className="search" placeholder="Search" />
          <div className="names-list">
            <ul className="search">
            {names.map((name, index) => <li key={index} onClick={handleSelect}>{name}</li>)}
            </ul>
          </div>
        </form>
    </div>
  )
}
