import React from 'react';
import { useState, useEffect } from "react";
import { FcExpired } from 'react-icons/fc';
import Axios from "axios";
//import { FiAlertTriangle } from 'react-icons/fi';
import './style.css';
//styleline


const Notices = () => {

  
  
  const [heading, setHeading] = useState("");
  const [notice1, setNotice1] = useState("");

  const [noticestatus, setNoticestatus] = useState('');

  
  const addNotice = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/generatenotice", {
     
      heading: heading,
      notice1: notice1,
      
    }).then((response) =>{
      if(response.data.message){
        setNoticestatus(response.data.message);
      }else{
        setNoticestatus("Data Inserted successfully");
      }
    })
    }
  


 return(
<div className='notice'>
  
<div className="header justify-content-around align-items-center">
           <h3>Notice</h3>
            </div>
            <form>
  <div class="form-group">
    <label for="heading">Enter Heading</label>
    <input type="text" class="form-control" id="heading" placeholder="" 
     onChange={(event) => {
      setHeading(event.target.value);
    }}
    required
    />
  </div>
  <div class="form-group">
    <label for="notice"><FcExpired></FcExpired>Notice</label>
    <textarea class="form-control" id="notice" rows="5" placeholder='Type Notice here...'
     onChange={(event) => {
      setNotice1(event.target.value);
    }}
    required
    ></textarea>
  </div>
  <div className='col-12'>
  <button type="submit" class="btn btn-primary" onClick={addNotice} >Generate</button>
  </div>
  <h4 style={{color:'Green', fontSize:'40px', textAlign:'center', marginTop:'20px'}}>{noticestatus}</h4>
  </form>
</div>
  );
};

export default Notices
