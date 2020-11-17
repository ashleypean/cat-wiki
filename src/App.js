import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import Top10 from './components/Top10Page/Top10.js'
import SearchResults from './components/BreedSearchResults/SearchResults.js'

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={HomePage} />
          <Route exact path="/top-10" render={Top10}/>
          <Route path="/breeds/search/:name" render={SearchResults} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
