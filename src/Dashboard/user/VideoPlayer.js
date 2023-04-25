import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import Comments from './comments';
import VideoSection from './VideoSection';
import {useParams} from 'react-router-dom';
import axios from 'axios';
const VideoPlayer = () => {

  
  const params = useParams();

  console.log();
  const [videoUrl,setVideoUrl] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/video/url/${params.id}`).then(res=>JSON.stringify(res.data[0]))
    .then(json=>setVideoUrl(JSON.parse(json)));
    
  },[])
  return (
    <>
    <div>
      <div className='row'>
        <div className='col-md-9'>
          <div className='row'>
            <div className='col-*-12'>
              <ReactPlayer url={videoUrl.url} width={830} controls/>
            </div>
          </div>
          <div className='row'>
            <div className='col-*-12'>
              <Comments />
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <VideoSection />
        </div>
      </div>
    </div>
    </>
    
  )
}

export default VideoPlayer
