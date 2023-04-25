import React, { useEffect, useState } from 'react'
import Content from './Content'
import Header from './Header'
// import SideNav from './SideNav'
import '../Assert/css/SideNav.css';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
 
  const navigate = useNavigate();
  let role = '';
  useEffect(()=>{
    role = localStorage.getItem('role');
    
    if(role == "Admin"){
      role = "Admin";
    }else{
      navigate("/userNotFound", { replace: true });
    }
  },[])
  
  return (
    <div>
        <div className='row header'>
          <div className='col-12'>
              <Header role={role}/>
          </div>
        </div>
    
      <div className='row'>
        <div className='bg-dark col-auto col-md-2 min-vh-100 sidenav' style={{float: "left"}}>
          <ul className='nav nav-pills flex-column'> 
           
          <li className='nav-item text-white'>
              <a href="/dashboard" className='nav-link text-white ' aria-current="page">
                <i className='bi bi-speedometer2' style={{fontSize:"25px"}}></i>
                <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
              </a>
            </li>
            <li className='nav-item text-white'>
              <a href="/dashboard/videos" className='nav-link text-white ' aria-current="page">
                <i className='bi bi-camera-video' style={{fontSize:"25px"}}></i>
                <span className='ms-2 d-none d-sm-inline'>Video</span>
              </a>
            </li>

            <li className='nav-item text-white'>
              <a href="/dashboard/audios" className='nav-link text-white'>
                <i className='bi bi-soundwave' style={{fontSize:"25px"}}></i>
                <span className='ms-2  d-none d-sm-inline'>Audio</span>
              </a>
            </li>

            <li className='nav-item text-white'>
              <a href="/dashboard/users" className='nav-link text-white'>
                <i className='bi bi-people' style={{fontSize:"25px"}}></i>
                <span className='ms-2  d-none d-sm-inline'>Users</span>
              </a>
            </li>
            {/* <li className='nav-item text-white'>
              <a href="/dashboard/upload" className='nav-link text-white'>
                <i className='bi bi-people' style={{fontSize:"25px"}}></i>
                <span className='ms-2  d-none d-sm-inline'>Upload</span>
              </a>
            </li> */}

            {/* <li className='nav-item text-white'>
              <a href="/dashboard/comments" className='nav-link text-white'>
                <i className='bi bi-people' style={{fontSize:"25px"}}></i>
                <span className='ms-2  d-none d-sm-inline'>Comments</span>
              </a>
            </li>
            <li className='nav-item text-white'>
              <a href="/dashboard/polls" className='nav-link text-white'>
                <i className='bi bi-people' style={{fontSize:"25px"}}></i>
                <span className='ms-2  d-none d-sm-inline'>Polls</span>
              </a>
            </li> */}

          </ul>
        </div>
        <div className='col-10 content' style={{background:"light-greens",height:"70vh",marginLeft: "225px"}}>
            <Content />
        </div>
      </div>
      </div>

  )
}

export default Dashboard
