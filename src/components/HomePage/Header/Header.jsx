import React from 'react'
import SearchIcon from '../../../img/search-icon.png'
import './Header.css'

export default function Header() {

  return (
    <div className="header">
      <h4 className="title">CatWiki</h4>
      <p className="subtitle">Get to know more about your cat breed</p>
      <div className="search">
        <input type="text" name="search" id="search" autocomplete aria-autocomplete="list" aria-label="Search for a cat breed" placeholder="Search" aria-placeholder="Search breeds"/>
        <datalist id="search">
          <option value="Ice cream">Ice cream</option>
          <option value="Hello">Hello</option>
        </datalist>
        <img src={SearchIcon} className="search" alt='Search icon'/>
      </div>
    </div>
  )
}
