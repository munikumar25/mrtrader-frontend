import React,{useState,useEffect} from 'react';
// import img from '../../Assert/images/bmw.png';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/styles';
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
const Video = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  // const [totalRows, setTotalRows] = useState(5);
  const [post,setPost] = useState()
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const column = [
    {
      name:"S.no",
      selector:row=>row.video_id,
      sortable:true
    },
    {
      name:"videoName",
      selector:row=>row.video_name
    },
    {
      name:"videoDiscription",
      selector:row=>row.video_discription

    },
    {
      name:"Action",
      selector:function () {
        return <><button onclick="clickDeactivateUser(this)" class="btn btn-success btn-sm" style={{marginRight:"15px"}}>Edit</button>
        <button onclick="clickDeactivateUser(this)" class="btn btn-danger btn-sm">Delete</button></>;
    }
    }
  ];
  const [saveData,setSaveData] = useState([]);

  const [videoContent,setvideoContent] = useState({
    videoName : "",
    videoDiscription:"",
    url:"",
    videoThumbnail:"",
    videoStatus:"",
    access:"",
  }); 

useEffect (()=>{
  setLoading(true);
  axios.get("http://localhost:8000/api/user/video")
  .then(res=>{
    JSON.stringify(res.data.data)
    setPost(res.data.data);
    console.log(JSON.parse(JSON.stringify(res.data.data)));
    setSaveData(JSON.parse(JSON.stringify(res.data.data)));
  })
  setLoading(false);
},[]);
 
const {videoName,videoDiscription,videoUrl,videoThumbnail,videoStatus,access} = videoContent;

const onChangeSelectedData = (e) =>{
  setvideoContent({...videoContent,videoStatus:e.target.value});
}

const onChangeData = (e) =>{
  setvideoContent({...videoContent,[e.target.name]:e.target.value});
}

const submittedData = (e) =>{
  setLoading(true);
    e.preventDefault();
    axios.post("http://localhost:8000/api/user/addVideo",videoContent).then(res=>{
        JSON.stringify(res).then(json=>{
            const s = JSON.parse(json);
            if(s.success === true) {
                redirect('/dashboard');
            }
        })
        
    });
    setLoading(false);
    console.log(videoContent)
}


  return (
    <>
    {post? "":<Backdrop className={classes.backdrop} open style={{zIndex:"100"}}>
        <CircularProgress color="inherit" />
      </Backdrop>}
      <div id="content-wrapper" className="d-flex flex-column" style={{marginTop:"60px"}}>
        <div id="content">
          <div className="container-fluid">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <span className="m-0 font-weight-bold text-primary">Video</span>
                <button className='btn btn-primary' style={{float:"right"}} data-bs-toggle="modal" data-bs-target="#myModal">Add New Video</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                <DataTable
                progressPending={loading}
                columns={column}
                data={saveData}
                pagination
                fixedHeader
                paginationPerPage={rowsPerPage}
                paginationRowsPerPageOptions={[5]}
              ></DataTable>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal" id="myModal" style={{marginTop:"60px",color:"black"}}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Add Video</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='row'>
          <div className='col-lg-12'>
            <form onSubmit={submittedData}>
              <div className="row login-form" style={{paddingTop:"10px"}}>
                <div className="col-md-12">
                  <div className="form-group">
                    <label style={{color:"black",float:"left"}}>Video Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Enter Video Name" name="videoName" value={videoName} onChange={onChangeData} required/>
                  </div>
                  <div className="form-group">
                    <label style={{color:"black",float:"left"}}>Video Discription<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Enter Video Discription" name="videoDiscription" value={videoDiscription} onChange={onChangeData} required/>
                  </div>
                  <div className="form-group">
                    <label style={{color:"black",float:"left"}}>Video Url <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Enter Video URL" name="videoUrl" value={videoUrl} onChange={onChangeData} required/>
                  </div>
                  <div className="form-group">
                    <label style={{color:"black",float:"left"}}>Video Thumbnail<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Enter Video thumbnail URL" name="videoThumbnail" value={videoThumbnail} onChange={onChangeData} required/>
                  </div>
                  <div className="form-group">
                    <label style={{color:"black",float:"left"}}>Video Status <span className="text-danger">*</span></label>
                    <select  defaultValue={'DEFAULT'} className="form-control" name={videoStatus} onChange={onChangeSelectedData}>
                      <option value="DEFAULT" disabled className="hidden">-- Select --</option>
                      <option value="active">Active</option>
                      <option value="inActive">In Active</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label style={{color:"black",float:"left"}}>Access<span className="text-danger">*</span></label>
                    <select defaultValue={'DEFAULT'} className="form-control" name={videoStatus} onChange={onChangeSelectedData}>
                      <option value="DEFAULT" className="hidden"  disabled>-- Select --</option>
                      <option value="active">Free</option>
                      <option value="inActive">Paid</option>
                    </select>
                  </div>

                    <input type="submit" className="btnLogin"  value="Upload Video"/>
                    <div style={{paddingBottom:"30px"}}></div>  
                                    
                </div>
                                   
              </div>            
            </form>             
          </div>                
        </div>
      </div>
    
    </div>
  </div>
</div>
<div className="modal" id="myModal1" style={{marginTop:"60px",color:"black"}}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Video</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Modal body..
      </div>
    </div>
  </div>
</div>
  
</>

  )
}


export default Video
