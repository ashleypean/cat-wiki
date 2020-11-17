import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import Placeholder from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/placeholder.jpg'
import './OtherPhotos.css'

const photo = (
  <img src={Placeholder} alt="Placeholder"/>
)

export default function OtherPhotos(props) {
  const { breedName } = useParams()
  const [photos, setPhotos] = useState([Placeholder, Placeholder, Placeholder, Placeholder, Placeholder, Placeholder, Placeholder, Placeholder])

  //Fetch photos from server
  useEffect(() => {
    fetch(`http://localhost:3000/breeds/search/${breedName}`)
    .then(res => res.json())
    .then(data => setPhotos(data.photos.slice(1)))
    console.log(photos)
  }, [])

  return (
    <div className="other-photos">
      <h3>Other photos</h3>
      <div className="photos">
      {photos.map((photo, index) => <img src={photo} alt={breedName} key={index} />)}
      </div>
      
    </div>
  )
}
