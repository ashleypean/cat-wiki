import React from 'react'
import Placeholder from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/placeholder.jpg'
import './OtherPhotos.css'

const photo = (
  <img src={Placeholder} alt="Placeholder"/>
)

export default function OtherPhotos() {
  return (
    <div className="other-photos">
      <h3>Other photos</h3>
      <div className="photos">
      {[photo,photo,photo,photo,photo,photo,photo,photo ]}
      </div>
      
    </div>
  )
}
