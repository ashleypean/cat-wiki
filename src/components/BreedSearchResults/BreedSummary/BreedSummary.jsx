import React from 'react'
import Stats from './SummaryContent/Stats.jsx'
import Photo from './SummaryContent/Photo.jsx'
import Text from './SummaryContent/Text.jsx'
import './BreedSummary.css'

export default function BreedSummary() {
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
