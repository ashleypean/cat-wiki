import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.css';
import {ReactComponent as Logo} from './img/logo.svg'
import Header from './components/HomePage/Header/Header.jsx'
import Article from './components/HomePage/Article/Article.jsx'
import Footer from './components/HomePage/Footer/Footer.jsx'
import MostSearched from './components/HomePage/MostSearched/MostSearched.jsx'
import PhotoGrid from './components/HomePage/PhotoGrid/PhotoGrid.jsx'

function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
      <MostSearched />
    </div>
  );
}

export default App;
