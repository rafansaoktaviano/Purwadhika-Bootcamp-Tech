import React from 'react'
import "./nav.css"

import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <div className="nav-bar">
      <div className='Logo'>Rafansa Oktaviano</div>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to="./Profile">Profile</Link></li>
      </ul>
    </div>
  )
}
