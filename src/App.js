import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import Top10 from './components/Top10Page/Top10.js'
import SearchResults from './components/BreedSearchResults/SearchResults.js'
import Placeholder from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/placeholder.jpg'
import Footer from './components/Footer/Footer.jsx'

export default function App() {

  return (
    <div className="App">
      <Router>
        <Switch>      
          {/* HOME PAGE */}
          <Route exact path="/" render={HomePage} />
          {/* MOST SEARCHED BREEDS*/}
          <Route exact path="/top-10" render={Top10}/>
          {/* SEARCH SPECIFIC BREED */ }
          <Route path="/breeds/search/:breedName" render={SearchResults} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

