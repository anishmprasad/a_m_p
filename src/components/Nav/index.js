import React from 'react';
import './index.scss'

export default function Nav(props) {
  return(
    <ul className="menu">
      <li className="menu-list">Home</li>
      <li className="menu-list">About</li>
      <li className="menu-list">Contact</li>
    </ul>
  )
}