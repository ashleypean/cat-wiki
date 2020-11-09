import React from 'react'
import './Header.css'
import Logo from '../../../img/logo.svg'


export default function Header() {
  return (
    <div className="top-10-header">
      <img src={Logo} alt="Logo"/>
      <h1>Top 10 most searched breeds</h1>
    </div>
  )
}
