
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.svg'
import BreedSummary from './BreedSummary/BreedSummary.jsx'
import OtherPhotos from './OtherPhotos/OtherPhotos.jsx'


export default function SearchResults() {
  return (
    <div className="search-results">
      <Link to="/">
        <img src={Logo} alt="Home Page" />
      </Link>
      <BreedSummary />
      <OtherPhotos />
    </div>
  )
}