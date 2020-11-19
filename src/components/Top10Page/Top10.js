import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header/Header.jsx'
import Logo from '../../img/logo.svg'
import Description from './Description/Description.jsx'
import Footer from './Footer/Footer.jsx'

function Top10() {
  return (
    <div className="top-10">
      <Link to="/">
        <img src={Logo} alt="Home Page" />
      </Link>
      <Header />
      <Description />
      <Footer />
    </div>
  );
}

export default Top10