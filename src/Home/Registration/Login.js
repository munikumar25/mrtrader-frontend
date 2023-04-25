import React,{useState,} from 'react';
import '../../Assert/css/Loginform.css';
import logo from '../../Assert/images/logo2.png';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles({
    root: {
      width: "100%"
    },
    button: {
      marginRight: 10,
      borderRadius: 100,
      fontSize: 20,
    },
    instructions: {
      marginTop: 2,
      marginBottom: 5
    }
  });

const Login = () => {
    const classes = useStyles();
  const [post,setPost] = useState("null")
  const [error,setError] = useState()

  const [loginUser,setLoginUser] = useState({
      email : "",
      password:"",
  });
  
  const {email,password} = loginUser;
  const navigate = useNavigate();
  const onChangeData = (e) =>{
      setLoginUser({...loginUser,[e.target.name]:e.target.value});
  }
  
  const submittedData = (e) =>{
      e.preventDefault();
      setPost(null)
      axios.post("http://localhost:8000/api/loginDataValidation",loginUser).catch((error)=>{
        if (error.response) {
           
            console.log(error.response.data);
            console.log(error.response.status);
            if(error.response.status == 404 || error.response.status == 500){
              setError("Incorect username and Password")
            }
            // console.log(error.response.headers);
            
            // const error = JSON.parse(JSON.stringify(error.response.data));
            setPost(error)
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
    }).then(res=>JSON.stringify(res)).then(r=>JSON.parse(r)).then(d=>{
        if(d.data.role === 1){
            localStorage.setItem("role","Admin")
            localStorage.setItem("token",d.data.token)
            localStorage.setItem("userData",d.data.user)
            setPost(d.data.token)
            navigate("/dashboard", { replace: true });
        }else if(d.data.role === 2){
            localStorage.setItem("role","User")
            localStorage.setItem("token",d.data.token)
            console.log(d.data);
            setPost(d.data.token)
            localStorage.setItem("userData",JSON.stringify(d.data.user))
            navigate("/udashboard", { replace: true });
        }
    })
      console.log(loginUser)
  }
    return (
      <> 
      {post? "":<Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
      </Backdrop>}
          <div className="container-fluid login" style={{overflowY:"none"}}>
              <div className="row">
                  <div className="col-md-6 login-left">
                      <img src={logo} alt=""/>
                      <h3 style={{color:"white"}}>Welcome Mr.Trader Group</h3>
                      <h6 style={{color:"white",fontSize:"15px"}}>I don't Work for money, Money Works for Me</h6>
                      {/* <input type="submit" name="" value="Register"/><br/> */}
                  </div>
                  <div className="col-md-6 login-right" style={{paddingBottom:"63px",minHeight: "100vh"}}>
                      <div className="tab-content" id="myTabContent">
                          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                              <h3 className="login-heading">Login</h3>
                              
                              <form onSubmit={submittedData}>
                              
                              <div className="row login-form" style={{paddingTop:"60px"}}>
                                      <div className="col-md-12">
                                      <h6 className="center" style={{color:"red"}}>{error}</h6>
                                      <div className="form-group">
                                          <label style={{color:"black",float:"left"}}>Username/ Email <span className="text-danger">*</span></label>
                                          <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={onChangeData} required/>
                                      </div>
                                      <div className="form-group">
                                      <label style={{color:"black",float:"left"}}>Password<span className="text-danger">*</span></label>
                                          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={onChangeData} required/>
                                      </div>
  
                                      <input type="submit" className="btnLogin"  value="Login"/>
                                      
                                      </div>
                                       
                                  </div>
                                  <div style={{float:"center",paddingTop:"15px"}}><h6 style={{color:"black"}}>Your new User?<a href='/registration'>Please Register </a> </h6>  </div>  
                                      
                              </form>
                             
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    )
  }
  

export default Login
