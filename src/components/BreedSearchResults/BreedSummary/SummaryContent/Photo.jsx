import React from 'react'
import Placeholder from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/placeholder.jpg'

export default function Photo(props) {
  return (
    <div className="photo-container">
      <img src={props.photo[0]} alt="Placeholder" className="photo"/>
    </div>

  )
}
