
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Logo from '../../img/logo.svg'
import BreedSummary from './BreedSummary/BreedSummary.jsx'
import OtherPhotos from './OtherPhotos/OtherPhotos.jsx'
import LoadingPage from '../Loading/Loading.jsx'

export default function SearchResults() {
  const [isLoading, setIsLoading] = useState(true)
  const { breedName } = useParams()
  const [photos, setPhotos] = useState(['', ''])
  const [breedInfo, setBreedInfo] = useState({
    photos: ['', ''], 
    name: '', 
    description: '', 
    temperament: '', 
    origin: '', 
    life_span: '', 
    adaptability: '', 
    affection_level: '', 
    child_friendly: '', 
    grooming: '', 
    intelligence: '', 
    health_issues: '', 
    social_needs: '', 
    stranger_friendly: '', 
  })

  useEffect( () => {
    fetch(`http://localhost:3000/breeds/search/${breedName}`)
      .then(res => res.json())
      .then(data => {
        setBreedInfo(data)
        //Remove the first photo. First photo will be set as main breed photo
        data.photos.shift()
    
        //Only return photos in multiples of 4 so that all of the photos are even
        const permPhotos = data.photos
        setPhotos(permPhotos)
      })
      .then(setTimeout( () => {setIsLoading(false)}, 2000))
      .then(console.log(breedInfo.photos))
  }, [])

  return isLoading? <LoadingPage />: (
    <div className="search-results">
      <Link to="/">
        <img src={Logo} alt="Cat Wiki Logo. Click to go back to home page" />
      </Link>
      <BreedSummary breedInfo={breedInfo} breedName={breedName}/>
      <OtherPhotos photos={photos} breedName={breedName}/>
    </div>
  )
}