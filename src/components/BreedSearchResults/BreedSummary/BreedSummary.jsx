import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Stats from './SummaryContent/Stats.jsx'
import Photo from './SummaryContent/Photo.jsx'
import Text from './SummaryContent/Text.jsx'
import './BreedSummary.css'
import Placeholder from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/placeholder.jpg'

export default function BreedSummary() {
  //Store url name parameter. Will use on line 30 to fetch from local server
  const { breedName } = useParams()

  //State variable will store all values that appear on page dynamically
  const [breedInfo, setBreedInfo] = useState({
    photos: [Placeholder, Placeholder, Placeholder, Placeholder, Placeholder, Placeholder, Placeholder], 
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

  //Fetch breed info from the server on page load
  useEffect(() => {
    fetch(`http://localhost:3001/breeds/search/${breedName}`)
    .then(res => res.json())
    .then(data => setBreedInfo(data))
  }, [])


  return (
    <div className="breed-summary">
      <Photo photo={breedInfo.photos}/>
      <div className="right">
        <Text name={breedName} description={breedInfo.description}/>
        <Stats stats={breedInfo}/>
      </div>
    </div>
  )
}
