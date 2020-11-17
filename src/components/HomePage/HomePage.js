import React from 'react'
import {ReactComponent as Logo} from '../../img/logo.svg'
import Header from './Header/Header.jsx'
import Article from './Article/Article.jsx'
import Footer from './Footer/Footer.jsx'
import MostSearched from './MostSearched/MostSearched.jsx'
import PhotoGrid from './PhotoGrid/PhotoGrid.jsx'

export default function Homepage() {

  return (
    <div className="homepage">
      <Logo />
      <Header />
      <MostSearched />
      <Article />
      <PhotoGrid />
      <Footer />
    </div>
  );
}
