import axios from 'axios';
import React, { useState } from 'react'
import * as XLSX from 'xlsx';

const UploadUserList = () => {
  const [data,setData] = useState([]);
  const readExcel = (file) =>{
      const promise = new Promise((resolve,reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file)
        fileReader.onload = (e)=>{
         const fileData =  e.target.result;
         const web = XLSX.read(fileData,{tyle:'buffer'});
         const worksheet = web.SheetNames[0];
         const sheet = web.Sheets[worksheet];
         const json = XLSX.utils.sheet_to_json(sheet);
         resolve(json)
        };
        fileReader.onerror = ((err)=>{
          reject(err);
        })
        
      })
      promise.then((d)=>{
        setData(d);
      })
    }
  const dataSubmit = (e) =>{
    e.preventDefault();
    console.log(data);
    // axios.post("http://localhost:8000/api/saveData",data).then(e=>console.log("Success")).catch(error=>console.log(error));
  }
return (
  <div>
    <h3 style={{textAlign:"left",marginBottom:"50px"}}>Upload Bulk User Data</h3>
      <form onSubmit={dataSubmit}>
          <input type='file' name='file' onChange={(e)=>{
              const file = e.target.files[0];
              readExcel(file);
          }}/>
          <button>Upload</button>
      </form>
  </div>
)
}

export default UploadUserList
