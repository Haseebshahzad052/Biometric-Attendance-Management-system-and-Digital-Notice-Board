import React, { useEffect } from 'react'
import { useState } from "react";
import Axios from 'axios'
import './style.css';
// styleline114
//serverline 

const Biometric = () => {

  const [professor_id, setProfessor_id] = useState('');
  const [loginstatus, setLoginstatus] = useState('');
    
  const login = (e) =>{
    e.preventDefault();
    Axios.post('http://localhost:8080/biometric1', {
     professor_id: professor_id,
    }).then((response) =>{
      if(response.data.message){
        setLoginstatus(response.data.message);
      }else{
        setLoginstatus(response.data[0].email);
      }
    })
  }
  
 

  return (
    <div className='biometric'>
      <div className="row">
          <div className="col-md-12 p-1 ">
            <div className="header justify-content-around align-items-center">
           <h3>Bio-metric Machine</h3>
            </div>
            </div>
          </div>
      <div className='row'>
        <div className='col-4'></div>
        <div className='col-4'>
        <form class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
    <label for="searchid" class="sr-only">ID</label>
    <input type="text" class="form-control" id="searchid" placeholder="Enter ID"
    onChange={(e) => {setProfessor_id(e.target.value)}}
     />
  </div>
  <button type="submit" class="btn btn-primary mb-2"  onClick={login} >Enter</button>
  <h4 style={{color:'red', fontSize:'10px', textAlign:'center', marginTop:'20px'}}>{loginstatus}</h4>
</form>
        </div>
        <div className='col-4'></div>
    
    </div>
    
   
           </div>
      
  )
}

export default Biometric
