import React from 'react'

export default function Text(props) {
  return (
    <div className="text">
      <h4>{props.name}</h4>
      <p>{props.description}</p>
    </div>
  )
}
