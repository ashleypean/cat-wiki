import React from 'react'
import Placeholder from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/placeholder.jpg'
import './Description.css'

const searchResult = (
  <div className="search-result">
      <img src={Placeholder} alt=""/>
      <div className="text">
        <h3>1. Bengal</h3>
        <p>
        Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it. 
        </p>
      </div>
  </div>

)



export default function Description() {
  return (
    <div className="top-10-description">
      
      {[searchResult,searchResult,searchResult,searchResult,searchResult,searchResult,searchResult,searchResult,searchResult,searchResult ]}
    </div>
  )
}
