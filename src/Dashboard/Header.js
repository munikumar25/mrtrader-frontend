import React from 'react';
import '../Assert/css/Nav.css';
import logo from '../Assert/images/logo.png';
const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/dashboard"><img src={logo} alt="logo" width={50} height={50}/><span className="logoContent">MR.TRADER</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{align:"right"}}>
                    <li className="nav-item">
                    <a className="nav-link" style={{color:"black",fontWeight:"bold"}} aria-current="page" href="/dashboard">{props.role}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link btn btn-primary" href="/" style={{color:"white",fontWeight:"bold"}}>Logout</a>
                    </li>
                    <li className="nav-item dropdown">
                    
                    </li>
                    <li className="nav-item">
                    
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Header
