import React,{useState,useEffect} from 'react';
import axios from 'axios';
import audioSong from '../../Assert/images/Neekemo Andamekkuva.mp3';
const AudioList = () => {
  const [records,setRecords] = useState([]);
  // const data = [
  //   {
  //     "id":1,
  //     "name":"munikumar"
  //   },{
  //     "id":2,
  //     "name":"Ravi"
  //   },{
  //     "id":3,
  //     "name":"Kishore"
  //   },{
  //     "id":4,
  //     "name":"Royal"
  //   },
  //   {
  //     "id":1,
  //     "name":"munikumar"
  //   },{
  //     "id":2,
  //     "name":"Ravi"
  //   },{
  //     "id":3,
  //     "name":"Kishore"
  //   },{
  //     "id":4,
  //     "name":"Royal"
  //   }
  // ]
useEffect (()=>{
  axios.get(`http://localhost:8000/api/user/audio`).then(res=>JSON.stringify(res.data)).then(data=>setRecords(JSON.parse(data)))
  
  },[]);
  return (
    <div>
      
      <div className='row'>
      {records.map((list,index)=>(
        <div className='col-md-3' key={index}>
         <div className='card' style={{margin:"5px"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div className='card-header'>
              <img src={list.audio_thumbnail} width={220} height={200} alt=""/>
            </div>
            <div className='card-body'>
              <h3>{list.audio_name}</h3>
              <button type="button" class="btn btn-primary" >
              Launch demo modal
            </button>
            </div>
          </div>
        </div>
        ))} 
      </div>
      <div class="modal" tabindex="-1" id="exampleModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Audio Player</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <audio src={audioSong} controls />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AudioList
