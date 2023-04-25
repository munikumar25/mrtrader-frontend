import React ,{ useState,useEffect }from 'react';
import img from '../../Assert/images/bmw.png';
import axios from 'axios';
// import { redirect } from 'react-router-dom';
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

const Audio = () => {
  const [loading, setLoading] = useState(false);
  const [userData,setUserData] = useState();
  const [totalRows, setTotalRows] = useState(5);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [audioContent,setaudioContent] = useState([]);
  const classes = useStyles();
  const [post,setPost] = useState()

useEffect(()=>{
  setLoading(true);
  axios.get("http://localhost:8000/api/user/audio").then(res=>JSON.stringify(res.data)).then((json)=>{
    const data = JSON.parse(json);
    setaudioContent(data)
    setPost(data);
   })
   setLoading(false);
   console.log(audioContent);
},[]);
const column = [
  {
    name:"S.no",
    selector:row=>row.id,
    sortable:true
  },
  {
    name:"Audio Name",
    selector:row=>row.audio_name
  },
  { 
    name:"discription",
    selector:row=>row.audio_discription
  },
  // {
  //   name:"thumbnail",
  //   selector:row=>row.audio_thumbnail
  // },
  {
    name:"Action",
    selector:function () {
      return <><button onclick="clickDeactivateUser(this)" class="btn btn-success btn-sm" style={{marginRight:"15px"}}>Edit</button>
      <button onclick="clickDeactivateUser(this)" class="btn btn-danger btn-sm">Delete</button></>;
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
const {audioName,audioDiscription,audioUrl,audioThumbnail,audioStatus,access} = audioContent;

const onChangeSelectedData = (e) =>{
  setaudioContent({...audioContent,videoStatus:e.target.value});
}

const onChangeData = (e) =>{
  setaudioContent({...audioContent,[e.target.name]:e.target.value});
}

const submittedData = (e) =>{
  setLoading(true);
    e.preventDefault();
    axios.post("http://localhost:8000/api/user/addAudio",audioContent).catch((error)=>{
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    })
    setLoading(false);
    console.log(audioContent)
}
function handleFIlter(event){
  console.log("event.target.value.toLowerCase()");
    const newData = audioContent.filter(row=>{
      return row.first_name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setaudioContent(newData)
}
    return (
      <div>
        {post? "":<Backdrop className={classes.backdrop} open style={{zIndex:"100"}}>
        <CircularProgress color="inherit" />
      </Backdrop>}
           <>
        <div id="content-wrapper" className="d-flex flex-column" style={{marginTop:"60px"}}>
        <div id="content">
          <div className="container-fluid" style={{marginTop:"-50px",top:"15px",position:'sticky'}}>
            <div className="card shadow mb-4 h-50" >
              <div className="card-header py-3">
                <span className="m-0 font-weight-bold text-primary">Audio</span>
                <button className='btn btn-primary' style={{float:"left"}} data-bs-toggle="modal" data-bs-target="#myModal">Add New Audio</button>
                <input type='text' onChange={handleFIlter} style={{float:"right"}} placeholder='Search'/>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                <DataTable
                  progressPending={loading}
                  columns={column}
                  data={audioContent}
                  pagination
                  fixedHeader
                  fixedFooter
                  customStyles={customStyles}
                  paginationPerPage={rowsPerPage}
                  paginationRowsPerPageOptions={[10,50,100]}
                ></DataTable>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
    </>
        <div class="modal" id="myModal" style={{marginTop:"60px",color:"black"}}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Add Video</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className='row'>
          <div className='col-lg-12'>
            <form onSubmit={submittedData}>
              <div className="row login-form" style={{paddingTop:"10px"}}>
                <div className="col-md-12">
                  <div className="form-group">
                    <label style={{color:"black",float:"left"}}>Audio Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Enter Audio Name" name="audioName" value={audioName} onChange={onChangeData} required/>
                  </div>
                  <div className="form-group">
                    <label style={{color:"black",float:"left"}}>Audio Discription<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Enter Audio Discription" name="audioDiscription" value={audioDiscription} onChange={onChangeData} required/>
                  </div>
                  <div className="form-group">
                    <label style={{color:"black",float:"left"}}>Audio Url <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Enter Audio URL" name="audioUrl" value={audioUrl} onChange={onChangeData} required/>
                  </div>
                  <div className="form-group">
                    <label style={{color:"black",float:"left"}}>Audio Thumbnail<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Enter Audio thumbnail URL" name="audioThumbnail" value={audioThumbnail} onChange={onChangeData} required/>
                  </div>
                  <div className="form-group">
                    <label style={{color:"black",float:"left"}}>Audio Status <span className="text-danger">*</span></label>
                    <select className="form-control" name={audioStatus} onChange={onChangeSelectedData}>
                      <option className="hidden"  selected disabled>-- Select --</option>
                      <option value="active">Active</option>
                      <option value="inActive">In Active</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label style={{color:"black",float:"left"}}>Access<span className="text-danger">*</span></label>
                    <select className="form-control" name={audioStatus} onChange={onChangeSelectedData}>
                      <option className="hidden"  selected disabled>-- Select --</option>
                      <option value="active">Free</option>
                      <option value="inActive">Paid</option>
                    </select>
                  </div>

                    <input type="submit" className="btnLogin"  value="Upload Audio"/>
                    <div style={{paddingBottom:"30px"}}></div>  
                                    
                </div>
                                   
              </div>            
            </form>             
          </div>                
        </div>
      </div>
      {/* <div class="modal-footer">
      
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div> */}
    </div>
  </div>
</div>

<div class="modal" id="myModal1" style={{marginTop:"60px",color:"black"}}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Video</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Modal body..
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </div>
  );
  }

export default Audio
