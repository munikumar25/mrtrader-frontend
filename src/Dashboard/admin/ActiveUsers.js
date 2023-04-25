import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import '../../Assert/css/DataTables.css';
import { useForm } from "react-hook-form";
import Backdrop from '@mui/material/Backdrop';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserEdit from './User/UserEdit';
import $ from 'jquery'; 
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

const ActiveUsers = () => { 
  const classes = useStyles();
  const [post,setPost] = useState("null")
  const [loading, setLoading] = useState(false);
  const [user,setUser] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [userData,setUserData] = useState({
    userId:"",
    firstName : "",
    lastName : "",
    gender:"",
    email : "",
    mobileNo : "",
    selectTrade:"",
    uniqueId : "",
    role:"",
    aadhar : "",
    pan: "",
    userStatus: "",
    verificationStatus: ""
});
const {firstName,lastName,gender,email,mobileNo,aadhar,pan,selectTrade,uniqueId,role,userStatus,verificationStatus} = userData;
const onChangeData = (e) =>{
  setUserData({...userData,[e.target.name]:e.target.value});
}
const { register, handleSubmit, formState: { errors } } = useForm();
useEffect(()=>{ 
    setLoading(true); 
    setPost(null)
    axios.get("http://localhost:8000/api/user/active").then(res=>JSON.stringify(res.data.data)).then((json)=>{
     const data = JSON.parse(json);
     setUser(data);
     setPost(data);
    })
    setLoading(false);
  },[]);
  function editUserData(id) {
    
    // axios.get(`http://localhost:8000/api/user/data/${id}`).then(getUserData=>JSON.stringify(getUserData.data)).then(json=>{
    //   const data = JSON.parse(json);
    // console.log(user);
    
    // setUserData([]);
    // console.log(user);
    user.map((data) => {
      if(data.user_id === id){
        userData.userId = data.user_id;
        userData.firstName = data.first_name;
        userData.lastName = data.last_name;
        userData.email = data.email;
        userData.gender= data.gender;
        userData.mobileNo = data.mobile_no;
        userData.uniqueId = data.unique_code;
        userData.selectTrade= data.trade_account;
        userData.role= data.role;
        userData.userStatus = data.user_status;
        userData.verificationStatus = data.verification_status;
        console.log(userData);
        document.getElementById('myEdit').style.display = 'block';
        return userData;
       
      }
    });
     
    console.log(userData);
  }
  
  
  

  function deleteUserData(id) {
    setPost(null)
    axios.delete(`http://localhost:8000/api/user/deleteUser/${id}`).then(getUserData =>{
     const stringData = JSON.stringify(getUserData);
     const jsonData = JSON.parse(stringData);
     if(jsonData.status === 200){
      setPost("Sucess")
      user.filter( searchItem => searchItem.userId !== id );
      toast.success("User Deleted Successfully !")
     }
    })
  }

  const column = [
    {
      name:"S.no",
      selector:row=>row.id,
      sortable:true
    },
    {
      name:"First Name",
      selector:row=>row.first_name
    },
    { 
      name:"Email",
      selector:row=>row.email
    },
    {
      name:"Mobile No",
      selector:row=>row.mobile_no
    },
    {
      name:"Status",
      selector:row=>row.user_status,
      
    },
    {
      name:"Action",
      selector:function ({user_id}) {
        return <>
        <i className="bi bi-pencil-square" onClick={() => editUserData(user_id)} style={{fontSize:"20px",color:"blue",margin:"8px"}} ></i>
        <i className="bi bi-eye"  style={{fontSize:"20px",color:"green",margin:"8px"}} data-bs-toggle="modal" data-bs-target="#myView"></i>
        <i className="bi bi-trash" onClick={() => deleteUserData(user_id)} style={{fontSize:"20px",color:"red",margin:"8px"}}></i>
        
        </>;
    }
    }
  ];
  
  const customStyles = {
    rows: {
      style: {
        minHeight: '50px', // override the row height
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
     
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };
  const [query,setQuery] = useState("");
  
  const search = (users) =>{
    return users.filter(item=>item.first_name.toLowerCase().includes(query))
  }
  const onChangeDataGender = (e) =>{
    setUserData({...userData,gender:e.target.value});
}
const onChangeSelectedData = (e) =>{
  setUserData({...userData,selectTrade:e.target.value});
}
const closePopUp = ()=>{
  document.getElementById('myEdit').style.display = 'none';
}
const submittedData = (e) =>{
    e.preventDefault();
    setPost(null)
    console.log(userData);
    axios.post("http://localhost:8000/api/user/saveUser",userData).catch((error)=>{
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
    console.log(userData)
}
  return (
    <>
    {post? "":<Backdrop className={classes.backdrop} open style={{zIndex:"100"}}>
        <CircularProgress color="inherit" />
      </Backdrop>}
        <div id="content-wrapper" className="d-flex flex-column" style={{marginTop:"60px"}}>
        <div id="content">
          <div className="container-fluid" style={{marginTop:"-50px",top:"15px",position:'sticky'}}>
            <div className="card shadow mb-4 h-50" >
              <div className="card-header py-3">
                <span className="m-0 font-weight-bold text-primary" style={{fontSize:"20px",textAlign:"center"}}>Users List</span>
                <input type='text' onChange={(e)=>setQuery(e.target.value)} style={{float:"right"}} placeholder='Search'/>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                <DataTable
                  progressPending={loading}
                  columns={column}
                  data={user}
                  pagination
                  fixedHeader
                  fixedFooter
                  customStyles={customStyles}
                  paginationPerPage={rowsPerPage}
                  paginationRowsPerPageOptions={[5,10,50,100]}
                ></DataTable>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div> 
  <div className="modal" id="myEdit" style={{marginTop:"60px",color:"black"}}>
  <div className="modal-dialog" style={{marginTop: "-2px"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">User Edit</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={closePopUp} aria-label="Close"></button>
      </div>
      <div className="modal-body">
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
              <div className="form-group">
                <lable >Gender <span className='star'>*</span></lable>
                <select className="form-control" name={gender} onChange={onChangeDataGender}>
                  <option className="hidden"  selected disabled>-- Select Gender --</option>
                  <option value="m">Male</option>
                  <option value="f">Female</option>
                  <option value="t">Trans</option>
                </select>
              </div>
              <div className="form-group">
                <lable >Email <span className='star'>*</span></lable>
                <input type="email" className="form-control" placeholder="mrtr****@gmail.com" name="email" value={email} onChange={onChangeData} required/>
              </div>
              
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <lable >Enter Your Phone no <span className='star'>*</span></lable>
                <input type="number" className="form-control" placeholder="+91 80000 80000" name="mobileNo" value={mobileNo} onChange={onChangeData} required/>
              </div>
              {/* <div className="form-group">
                <lable >Aadhar No <span className='star'>*</span></lable>
                <input type="number" className="form-control" placeholder="Aadhar No" name="aadhar" value={aadhar} onChange={onChangeData} required/>
              </div>
              <div className="form-group">
                <lable >Pan No <span className='star'>*</span></lable>
                <input type="text" className="form-control"  placeholder="Pan no" name="pan" value={pan} onChange={onChangeData} required/>
              </div>
              {errors.mobile && <p>Please Enter Valid Mobile Number</p>} */}
              <div className="form-group">
                <lable >Select Trade Account <span className='star'>*</span></lable>
                <select className="form-control" name={selectTrade} onChange={onChangeSelectedData}>
                  <option className="hidden"  selected disabled>-- Select --</option>
                  <option value="ZeroDha">Zerodha</option>
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
          <input style={{float:"center"}} type="submit" className="btnRegister"  value="Update User Data"/>
          <br />
          <br />
          {/* <div style={{float:"center"}}><h6 style={{color:"black"}}>Your Existing User?<a href='/Login'>Please Login </a> </h6></div> */}
        </form>
        </div>
      </div>
    </div>
  </div>

<div className="modal" id="myView" style={{marginTop:"60px",color:"black"}}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title" style={{textAlign:"center"}}>User Details</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-lg-12">
              <img src='https://www.w3schools.com/howto/img_avatar.png' alt="" style={{borderRadius:"75px",width:"150px",height:"150px"}}/>
          </div>
        </div>
        <div className="row">
          <div className='col-lg-6'>
            <label>First Name :{userData.firstName}</label>
          </div>
          <div className='col-lg-6'>
            <label>Last Name :{lastName}</label>
          </div>
        </div>
        <div className="row">
          <div className='col-lg-12'>
            <label>Gender :{gender}</label>
          </div>
        </div>
        <div className="row">
          <div className='col-lg-6'>
            <label>Email :{email}</label>
          </div>
          <div className='col-lg-6'>
            <label>Mobile No :{mobileNo}</label>
          </div>
        </div>
        <div className="row">
          <div className='col-lg-6'>
            <label>User Status : {userStatus}</label>
          </div>
          <div className='col-lg-6'>
            <label>Verification Status :{verificationStatus}</label>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
<ToastContainer />
    </>
  )
}

export default ActiveUsers
