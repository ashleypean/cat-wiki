import React from 'react'
import {ReactComponent as Logo} from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/logo.svg'
import BreedSummary from './BreedSummary/BreedSummary.jsx'
import OtherPhotos from './OtherPhotos/OtherPhotos.jsx'
import Footer from './Footer/Footer.jsx'


export default function SearchResults() {
  return (
    <div className="search-results">
      <Logo />
      <BreedSummary />
      <OtherPhotos />
      <Footer />
    </div>
  )
}
