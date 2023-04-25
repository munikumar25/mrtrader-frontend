import React from 'react'
import { Link } from 'react-router-dom';
import '../Assert/css/SideNav.css';
const SideNav = () => {
  return (
    <div>
        
        <ul>
          <li ><Link to="/dashboard" className='list'>Dashboard</Link></li>
          <li><Link to="/dashboard/videos" className='list'>Videos</Link></li>
          <li><Link to="/dashboard/audios" className='list'>Audios</Link></li>
        </ul>
        
    </div>
  )
}

export default SideNav
