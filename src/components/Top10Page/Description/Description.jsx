import React, { useState, useEffect } from 'react'
import Placeholder from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/placeholder.jpg'
import './Description.css'


export default function Description() {
  const [top10, setTop10] = useState([{
    name: 'Bengal', 
    url: Placeholder, 
    description: 'This is a description'
  }])

  const searchResult =(obj, i) => {
    return (
      <div className="search-result" key={i}>
        <img src={obj.url} alt=""/>
        <div className="text">
          <h3>{`${i + 1}. ${obj.name}`}</h3>
          <p>
          {obj.description}
          </p>
        </div>
      </div>
    )
  } 

  useEffect(() => {
    fetch('http://localhost:3001/top-10')
      .then(res => res.json())
      .then(data => setTop10(data))
  }, [])

  return (
    <div className="top-10-description">
      {top10.map((obj, index) => {
        return searchResult(obj, index)
      })}
    </div>
  )
}

