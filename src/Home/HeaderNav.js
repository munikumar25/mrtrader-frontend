import React from 'react';
import '../Assert/css/Nav.css';
import logo from '../Assert/images/trading-logo.png';
const HeaderNav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img src={logo} alt="logo" width={50} height={50}/><span className="logoContent">MR.TRADER</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{align:"right"}}>
                    <li class="nav-item">
                    <a class="nav-link active btn btn-primary" style={{color:"white",fontWeight:"bold"}} aria-current="page" href="/login">Login</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/registration">Registration</a>
                    </li>
                    <li class="nav-item dropdown">
                    
                    </li>
                    <li class="nav-item">
                    
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
  )
}

export default HeaderNav
