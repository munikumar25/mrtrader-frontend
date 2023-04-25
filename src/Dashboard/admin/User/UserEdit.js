import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import Backdrop from '@mui/material/Backdrop';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserEdit = ({data}) => {
    const json = JSON.parse(JSON.stringify(data))
    console.log(data)
  const [post,setPost] = useState("null")
  const [loading, setLoading] = useState(false);
  const [user,setUser] = useState(data);
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
const {firstName,lastName,gender,email,mobileNo,aadhar,pan,selectTrade,uniqueId,role,userStatus,verificationStatus} = user;
const onChangeData = (e) =>{
  setUserData({...userData,[e.target.name]:e.target.value});
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
}
const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div>
      
    </div>
  )
}

export default UserEdit
