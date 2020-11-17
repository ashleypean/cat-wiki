import React, {useState, useEffect} from 'react'
import HeaderLogo from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/logo-white.svg'
import './Header.css'
import axios from 'axios'


export default function Header() {
  //Search bar options held in state 
  const [searchOptions, setSearchOptions] = useState([])

  //Fetch search options from server
  useEffect( () => {
    (async function () {
      //Fetch names from local server
      await fetch('http://localhost:3005')
        .then(res => res.json())
        //Filter for names only and return to response
        .then(data => data.map(x => x.name))
        //Set the search options state with array of names
        .then(names => setSearchOptions(names))
    })()
    
  }, [])

  const handleChange = (e) => {
    
  }

  return (
    <div className="header">
      <h4 className="title">CatWiki</h4>
      <img src={HeaderLogo} alt=""/>
      <p className="subtitle">Get to know more about your cat breed</p>
      <div className="search">
          <input type="text" name="search-bar" placeholder="Search" list="search-bar" onChange={handleChange}/>
          <datalist id="search-bar" >
              {searchOptions.map((name, i) => <option value={name} key={i}/>)}
          </datalist>
      </div>
    </div>
  )
}
