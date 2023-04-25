import React,{useState} from 'react';
import '../../Assert/css/Registration.css';
import logo from '../../Assert/images/logo2.png'
import axios from 'axios';
import { useForm } from "react-hook-form";

const Registration = () => {
const [registerUser,setRegisterUser] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password:"",
    gender:"",
    confirmPassword:"",
    mobileNo : "",
    uniqueId : "",
    selectTrade:"",
    role:1
});

const {firstName,lastName,email,mobileNo,password,confirmPassword,uniqueId,selectTrade,gender,role} = registerUser;

const onChangeData = (e) =>{
    setRegisterUser({...registerUser,[e.target.name]:e.target.value});
}
const { register, handleSubmit, formState: { errors } } = useForm();
console.log(role);
console.log(register);
console.log(handleSubmit);
const onChangeDataGender = (e) =>{
    setRegisterUser({...registerUser,gender:e.target.value});
}
const onChangeSelectedData = (e) =>{
    setRegisterUser({...registerUser,selectTrade:e.target.value});
}

const submittedData = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:8000/api/user/saveUser",registerUser).catch((error)=>{
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
    });
    // .then(res=>{
    //     JSON.stringify(res).then(json=>{
    //         const s = JSON.parse(json);
    //         console.log("das"+s.success)
    //         if(s.success === true) {
    //             redirect('/Login');
    //         }
    //     })
        
    // });
    console.log(registerUser)
}

  return (
    <> 

        <div className="container-fluid register">
            <div className="row">
                <div className="col-md-6 register-left">
                    <img src={logo} alt=""/>
                    <h3>Welcome</h3>
                    <p>You are 30 seconds away from earning your own money!</p>
                </div>
                <div className="col-md-6 register-right" style={{minHeight: "100vh"}}>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register-heading">Registration</h3>
                            <form onSubmit={submittedData}>
                            <div className="row register-form">
                                
                                <div className="col-md-6">
                                    
                                    <div className="form-group">
                                        <lable >First Name <span className='star'>*</span></lable>
                                        <input type="text" className="form-control" placeholder="First Name" name="firstName" value = {firstName} onChange={onChangeData} required/>
                                    </div>
                                    <div className="form-group">
                                        <lable >Last Name <span className='star'>*</span></lable>
                                        <input type="text" className="form-control" placeholder="Last Name" name="lastName" value = {lastName} onChange={onChangeData} required/>
                                    </div>
                                    {/* <div className="form-group">
                                        <label style={{color:"black"}}>Gender<span className='star'>*</span>: &nbsp;&nbsp;&nbsp; </label>
                                        <div className="maxl">
                                            <label className="radio inline"> 
                                                    <input type="radio" name={gender} value="M" onChange={onChangeDataGender} />
                                                    <span style={{color:"black"}}> Male </span> 
                                                </label>
                                                &nbsp;&nbsp;&nbsp;
                                                <label className="radio inline"> 
                                                    <input type="radio" name={gender} value="F" onChange={onChangeDataGender} />
                                                    <span style={{color:"black"}}>Female </span> 
                                                </label>
                                            </div>
                                        </div> */}
                                    
                                    
                                        <div className="form-group">
                                            <lable >Gender <span className='star'>*</span></lable>
                                            <select className="form-control" name={gender} onChange={onChangeDataGender}>
                                                <option className="hidden"  selected disabled>-- Select Gender--</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Trans">Trans</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                        <lable >Email <span className='star'>*</span></lable>
                                        <input type="email" className="form-control" placeholder="mrtr****@gmail.com" name="email" value={email} onChange={onChangeData} required/>
                                     </div>
                                     <div className="form-group">
                                            <lable >Enter Your Phone no <span className='star'>*</span></lable>
                                            <input type="number" className="form-control" placeholder="+91 80000 80000" name="mobileNo" value={mobileNo} onChange={onChangeData} required/>
                                        </div>
                                </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <lable >Password <span className='star'>*</span></lable>
                                        <input type="password" className="form-control" placeholder="**********" name="password" value={password} onChange={onChangeData} required/>
                                    </div>
                                    <div className="form-group">
                                        <lable >Confirm Password <span className='star'>*</span></lable>
                                        <input type="password" className="form-control"  placeholder="**********" name="confirmPassword" value={confirmPassword} onChange={onChangeData} required/>
                                    </div>
                                        
                                        {errors.mobile && <p>Please Enter Valid Mobile Number</p>}
                                        <div className="form-group">
                                            <lable >Select Trade Account <span className='star'>*</span></lable>
                                            <select className="form-control" name={selectTrade} onChange={onChangeSelectedData}>
                                                <option className="hidden"  selected disabled>-- Select --</option>
                                                <option value="Zerodha">Zerodha</option>
                                                <option value="TradeX">TradeX</option>
                                                <option value="TradeY">TradeY</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <lable >Enter Trade Id <span className='star'>*</span></lable>
                                            <input type="text" className="form-control" placeholder="Enter Unique Id" name="uniqueId"  value={uniqueId} onChange={onChangeData} required/>
                                        </div>
                                        
                                    </div>  
                                    
                                        
                                </div>
                                <input style={{float:"center"}} type="submit" className="btnRegister"  value="Register"/>
                                        <br />
                                        <br />
                                        <div style={{float:"center"}}><h6 style={{color:"black"}}>Your Existing User?<a href='/Login'>Please Login </a> </h6></div>
                            </form>
                            <br />
                                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Registration
