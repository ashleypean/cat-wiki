import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom' 
import './MostSearched.css'
import Placeholder from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/placeholder.jpg'
import Arrow from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/read-more-arrow.png'

export default function MostSearched(props) {
  const [top4, setTop4] = useState([Placeholder, Placeholder, Placeholder, Placeholder])

  //Import top 4 cats passed down from HomePage component
  useEffect(() => {
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(data => setTop4(data.top4))
  }, [])


  

  return (
    <div className="most-searched">
      <h5>Most Searched Breeds</h5>
      <div className="line-break"></div>
      <div className="titles">
        <h3>66+ Breeds For you to discover</h3>
        <p onClick='/top-10'>SEE MORE <img src={Arrow} alt="See more"/></p>
      </div>
      <div className="article-images">
      <div className="yellow-backdrop"></div>
      <div className="image-1">
        <img src={top4[1]} alt=""/>
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
