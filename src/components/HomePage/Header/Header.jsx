import React, {useState, useEffect} from 'react'
import HeaderLogo from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/logo-white.svg'
import './Header.css'

export default function Header() {
  //Search bar options held in state 
  const [searchOptions, setSearchOptions] = useState([''])

  //Fetch search options from server
  useEffect( () => {
    (async function () {
      await fetch('http://localhost:3005')
        .then(data => data.json())
        //Parse through response object and only return cat names
        .then(data => data.map(cat => cat.name))
        //Set search options state variable(line 7)
        .then(names => setSearchOptions(names))
        .then(names => console.log('done'))
    })()
    
  }, [])

  const handleSelect = e => {
    //When user selects a cat name that exists in the searchOptions, redirect to that cat's page
    const searchTerm = e.target.value 
    console.log(e.target)
  }

  const handleClick = e => {
    console.log(e.target)
  }

  return (
    <div className="header">
      <h4 className="title">CatWiki</h4>
      <img src={HeaderLogo} alt=""/>
      <p className="subtitle">Get to know more about your cat breed</p>
      <div className="search">
          <input type="text" name="search-bar" placeholder="Search" list="search-bar" onSubmit={handleSelect} onClick={handleClick}/>
          <datalist id="search-bar" >
            {/* Return list of cat names from useEffect hook (line10)*/}
            {searchOptions.map((name, index) => <option value={name} key={index} />)}
          </datalist>
      </div>
    </div>
  )
}
