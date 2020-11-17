import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Stats from './SummaryContent/Stats.jsx'
import Photo from './SummaryContent/Photo.jsx'
import Text from './SummaryContent/Text.jsx'
import './BreedSummary.css'

export default function BreedSummary() {
  const [breedInfo, setBreedInfo] = useState()
  const { name } = useParams()

  //Load cat breed info from local server instance 
  useEffect( () => {
    fetch(`http://localhost:3005/breeds/search/${name}`)
      .then(res => res.json())
      .then(data => setBreedInfo(data))
  }, [])

  return (
    <div className="breed-summary">
      <Photo />
      <div className="right">
        <Text />
        <Stats />
      </div>
    </div>
  )
}

//id
//name 
//description
//adaptability
//affefction level
//childfriendly
//intelligence
//health issues
//social needs
//stranger friendly
//temperament
//origin
//life_span