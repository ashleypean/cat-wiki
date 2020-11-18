import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import Top10 from './components/Top10Page/Top10.js'
import SearchResults from './components/BreedSearchResults/SearchResults.js'

export default function App() {
  const [top4, setTop4] = useState()
  const [breedNames, setBreedNames] = useState()

  //Send request to server for cat names and top4 cats
  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(data => {
        setBreedNames(data.names)
        setTop4(data.top4)
      })
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          
          {/* HOME PAGE */}
          <Route exact path="/">
            <HomePage names={breedNames} top4={top4}/>
          </Route>

          {/* MOST SEARCHED BREEDS*/}
          <Route exact path="/top-10">
            <Top10/>
          </Route>

          {/* SEARCH SPECIFIC BREED */ }
          <Route path="/breeds/search/:breedName">
            <SearchResults />
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

