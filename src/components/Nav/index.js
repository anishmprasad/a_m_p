import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

export default function Nav(props) {
  return(
    <ul className="menu">
    	<li className="menu-list">
    		<Link to="/opensource">Open Source</Link>
    	</li>
    	<li className="menu-list">
    		<Link to="/about">About</Link>
    	</li>
    	<li className="menu-list">
    		<Link to="/contact">Contact</Link>
    	</li>
    </ul>
  )
}