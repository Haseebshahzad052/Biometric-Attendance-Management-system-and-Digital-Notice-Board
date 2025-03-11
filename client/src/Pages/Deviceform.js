import React from "react";
import { useState } from "react";
import Axios from "axios";
//import { ToastContainer, toast } from 'react-toastify';
import "./style.css";
//styleline
//serverline 

const Deviceform = () => {

    const [dname, setDName] = useState("");
    const [ipadd, setIPadd] = useState("");
    const [deviceid, setDeviceid] = useState("");
    const [commenkey, setCommenkey] = useState("");
    const [portadd, setPortadd] = useState("");
   
    
    const [registerstatus, setRegisterstatus] = useState('');
  
  const [error, setError] = useState(false)
  
  
  //const ffname = useRef("");
    
    const addDevice = (e) => {
      e.preventDefault();
      //ffname.current.value = "" ;
      if(dname.length===0||ipadd.length===0||deviceid.length===0||commenkey.length===0||portadd.length===0){
        setError(true)
      }
      Axios.post("http://localhost:8080/adddevice", {
        dname: dname,
        ipadd: ipadd,
        deviceid: deviceid,
        commenkey: commenkey,
        portadd: portadd,
       
        
      }).then((response) =>{
        if(response.data.message){
          setRegisterstatus(response.data.message);
        }else{
          setRegisterstatus("Data Inserted successfully");
         
        }
          
      })
      }
    

      

  return (
    <div>
     <div className="formdevice">
  <h1>Device Setup</h1>
  <div className="dform">
  <div className="container mt-4" >
  <form class="row g-3" onSubmit={(e) =>{
    addDevice(e);
  }}>
  <div class="col-md-4">
<label for="dname" class="form-label">Device Name</label>
<input type="text" class="form-control" id="dname"
onChange={(event) => {
            setDName(event.target.value);
          }}
           />
           {error&&dname.length<=0?
           <label style={{color:"red"}}>Device Name can't be empty</label>:""}
</div>
<div class="col-md-1"></div>
<div class="col-md-4">
<label for="ipadd" class="form-label">IP Address</label>
<input type="text" class="form-control" id="ipadd" 
 onChange={(event) => {
  setIPadd(event.target.value);
}}
/>
{error&&ipadd.length<=0?
<label style={{color:"red"}}>IP Address can't be empty</label>:""}
</div>
<div class="col-md-2"></div>
<div class="col-md-3">
<label for="did" class="form-label">Device ID.</label>
<input type="text" class="form-control" id="did" 
 onChange={(event) => {
  setDeviceid(event.target.value);
}}
 required/>
</div>
<div class="col-md-4">
<label for="dck" class="form-label">Commen Key</label>
<input type="text" class="form-control" id="dck"
 onChange={(event) => {
  setCommenkey(event.target.value);
}}
 required/>
 {error&&commenkey.length<=0?
 <label style={{color:"red"}}>Commen Key can't be empty</label>:""}
</div>
<div class="col-md-3">
<label for="dpa" class="form-label">Port Address</label>
<input type="text" class="form-control" id="dpa"
 onChange={(event) => {
  setPortadd(event.target.value);
}}
 required/>
 {error&&portadd.length<=0?
 <label style={{color:"red"}}>Port Address can't be empty</label>:""}
</div>

<div class="col-3">
<button type="submit" class="btn btn-primary"
 //onClick={addDevice}
>Submit</button>
</div>
<h4 style={{color:'Green', fontSize:'40px', textAlign:'center', marginTop:'20px'}}>{registerstatus}</h4>
</form>
     </div>
     </div>






     </div>
    </div>
  )
}

export default Deviceform
