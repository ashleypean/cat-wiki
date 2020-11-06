import React from 'react'
import './MostSearched.css'
import Placeholder from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/placeholder.jpg'

export default function MostSearched() {
  return (
    <div className="most-searched">
      <h5>Most Searched Breeds</h5>
      <div className="line-break"></div>
      <h3>66+ Breeds For you to discover</h3>
      <div className="yellow-backdrop"></div>
      <div className="article-images">
      <div className="image-1">
        <img src={Placeholder} alt=""/>
        <p>Placeholder</p>
      </div>
      <div className="image-2">
        <img src={Placeholder} alt=""/>
        <p>Placeholder</p>
      </div>
      <div className="image-3">
        <img src={Placeholder} alt=""/>
        <p>Placeholder</p>
      </div>
      <div className="image-4">
        <img src={Placeholder} alt=""/>
        <p>Placeholder</p>
      </div>
      </div>

    </div>
  )
}
