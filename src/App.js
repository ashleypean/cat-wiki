import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import Top10 from './components/Top10Page/Top10.js'
import SearchResults from './components/BreedSearchResults/SearchResults.js'

export default function App() {
  const [top4, setTop4] = useState()
  const [top10, setTop10] = useState()
  const [breedNames, setBreedNames] = useState()

  //Get top 10 cats from server
  //Serach by adaptability and stranger friendliness
  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(data => {
        setBreedNames(data.names)
        setTop10(data.top10)
        setTop4(data.top10.splice(0, 4))
      })
}, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage names={breedNames} top4={top4}/>
          </Route>
          <Route exact path="/top-10" top10={top10}render={Top10}/>
          <Route path="/breeds/search/:breedName" render={SearchResults} />
        </Switch>
      </Router>
      
    </div>
  );
}

