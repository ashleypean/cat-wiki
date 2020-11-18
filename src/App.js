import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import Top10 from './components/Top10Page/Top10.js'
import SearchResults from './components/BreedSearchResults/SearchResults.js'

export default function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          
          {/* HOME PAGE */}
          <Route exact path="/">
            <HomePage />
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

