import React, { useEffect } from 'react'
import { NavLink} from 'react-router-dom'
import { useState } from "react";

import './style.css';
// styleline
//serverline 100

const Scheduletable = () => {


    const [record, setRecord] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:8080/schedule')
        .then(response => response.json())
        .then(data => setRecord(data))
        .catch(err => console.log(err))
      }, [])


  return (
    <div>
      <div className="timetables">
      <div className="row">
          <div className="col-md-12 p-1 ">
            <div className="header justify-content-around align-items-center">
           <h3>Schedule</h3>
            </div>
            </div>
          </div>

            <div className="timetable">
              <div className="row">
          <div className="col-md-12 p-1">
           
<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Class</th>
      <th scope="col">Section</th>
      <th scope="col">Sesssion</th>
      <th scope="col">Semester</th>
      <th scope="col">subject</th>
      <th scope="col">Start Time</th>
      <th scope="col">End Time</th>
      
    </tr>
  </thead>
       
                    
        {record.map((val, key) => {
          return ( 
            <tbody>
                <tr>
        
                <th scope="row">{val.id}</th>
                <td>{val.name}</td>
                <td>{val.class}</td>
                <td>{val.section}</td>
                <td>{val.session}</td>
                <td>{val.semester}</td>
                <td>{val.subject}</td>
                <td>{val.start_time}</td>
                <td>{val.end_time}</td>
               
             
        </tr>
            </tbody>
               
               );
              })}
           
              </table>
            </div></div>
              <div>
             

              </div>
            </div>
            <div className='row'>
            <div className="col-9">
<button className="p-3 btn btn-warning justify-content-around align-items-center rounded" style={{width:"290px"}}>
        <NavLink to="/scheduletable/Schedule" style={{ textDecoration: "none", color: "black"}} >
        Enter new Schedule
            </NavLink>
            </button>
  </div>
  
  
  </div>
      </div>
   
    </div>
  )
}

export default Scheduletable
