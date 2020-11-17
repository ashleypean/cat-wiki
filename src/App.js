import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import Top10 from './components/Top10Page/Top10.js'
import SearchResults from './components/BreedSearchResults/SearchResults.js'

function App() {
  const [top10, setTop10] = useState('')

  //Get top 10 cats from server
  //Serach by adaptability and stragner friendliness
  useEffect(() => {
    (async function () {
      await fetch('http://localhost:3001/')
        .then(res => res.json())
        .then(data => {
          let bestCats = data.filter(x => x.adaptability === 5 && x.stranger_friendly === 5).splice(0,10)
          setTop10(bestCats)
        })
    })()

    
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={HomePage} top10={top10} />
          <Route exact path="/top-10" top10={top10} render={Top10}/>
          <Route path="/breeds/search/:breedName" render={SearchResults}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
