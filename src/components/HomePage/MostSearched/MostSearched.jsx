import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import './MostSearched.css'
import Placeholder from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/placeholder.jpg'
import Arrow from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/read-more-arrow.png'

export default function MostSearched(props) {
  const [top4, setTop4] = useState([{url:Placeholder, name: ''}, {url:Placeholder, name: ''}, {url:Placeholder, name: ''}, {url:Placeholder, name: ''}])

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(data => setTop4(data.top4))
      .then(top4.map(x => console.log(x)))
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
       {top4.map((cat, i)=> (
         <div key={i} className={`image-${i+1}`}>
           <Link to={`/breeds/search/${cat.name}`}>
            <img src={cat.url} alt={cat.name}/>
            <p>{cat.name}</p>
           </Link>
           
         </div>
       ))}
      </div>
    </div>
  )
}
