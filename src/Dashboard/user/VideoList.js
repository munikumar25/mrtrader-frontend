import React,{useState,useEffect} from 'react'
import logo from '../../Assert/images/logo.png'
import axios from 'axios';

const VideoList = () => {

  const [records,setRecords] = useState([]);
  const data = [
    // {
    //   "id":1,
    //   "name":"munikumar"
    // },{
    //   "id":2,
    //   "name":"Ravi"
    // },{
    //   "id":3,
    //   "name":"Kishore"
    // },{
    //   "id":4,
    //   "name":"Royal"
    // },
    // {
    //   "id":1,
    //   "name":"munikumar"
    // },{
    //   "id":2,
    //   "name":"Ravi"
    // },{
    //   "id":3,
    //   "name":"Kishore"
    // },{
    //   "id":4,
    //   "name":"Royal"
    // }
  ]
useEffect (()=>{
  axios.get("http://localhost:8000/api/user/video").then(res => JSON.stringify(res.data.data))
  .then(json=>setRecords(JSON.parse(json)))  
  },[]);
  return (
    <div>
      
      <div className='row'>
      {records.map((list,index)=>(
        <div className='col-md-4' key={index}>
         <a href={"video_player/"+list.video_id} >
          <div className='card' style={{margin:"5px"}}>
            <div className='card-header'>
              <img src={logo} width={150} height={150} alt=""/>
            </div>
            <div className='card-body'>
              <h5>{list.video_name}</h5>
            </div>
          </div>
          </a>
        </div>
        ))} 
      </div>
     
    </div>
  )
}

export default VideoList
