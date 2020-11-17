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
    //Remove the first photo. First photo will be set as main breed photo
    .then(data => setPhotos(data.photos.slice(1)))
    console.log(photos)
  }, [])

  //Function will return photos only in multiples of 4 to preserve styling
  const multiplesOf4 = () =>  {
    return photos.length === 8? photos: photos.slice(0,4)
  }

  return (
    <div className="other-photos">
      <h3>Other photos</h3>
      <div className="photos">
        {multiplesOf4().map((photo, index) => <img src={photo} alt={breedName} key={index} />)}
      </div>
    </div>
  )
}
