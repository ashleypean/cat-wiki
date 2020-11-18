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

  return (  
    <div className="header">
      <h4 className="title">CatWiki</h4>
      <img src={HeaderLogo} alt=""/>
      <p className="subtitle">Get to know more about your cat breed</p>
      <div className="search">
          <input type="text" name="search-bar" placeholder="Search" list="search-bar"/>
          <datalist id="search-bar">
            {names.map((name, index) => <option key={index} value={name}/>)}
          </datalist>
      </div>
    </div>
  )
}
