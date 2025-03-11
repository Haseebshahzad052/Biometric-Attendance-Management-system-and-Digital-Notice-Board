import React, {useEffect} from 'react'
import { CSVLink } from "react-csv";
import { useState } from "react";
import Axios from "axios";
import './style.css';
//styleline 90


const headers = [
  {label:"ID", key:"id"},
  {label:"Name", key:"professor_name"},
  {label:"Course", key:"subject"},
  {label:"Class", key:"class"},
  {label:"Section", key:"section"},
  {label:"Semester", key:"semester"},
  {label:"Start Time", key:"start_time"},
  {label:"End Time", key:"end_time"},
]

const Attendance = () => {





  const currentDate = new Date().toLocaleDateString();

  
  const [attendance1, setAttendance1] = useState([]);
    
  useEffect(()=>{
      fetch('http://localhost:8080/attendance')
      .then(response => response.json())
      .then(data => setAttendance1(data))
      .catch(err => console.log(err))
    }, [])



    

   const deleteRecord = (id) => {
    Axios.delete(`http://localhost:8080/attendancedelete/${id}`).then((response)=> {
      setAttendance1(attendance1.filter((val)=> {
        return val.id !== id;
      }))
    })
  }



  return (
  <div className='attendance'>
     <div className="date">
      <h7>Date: {currentDate}</h7>
    </div>
  
     <div className="header justify-content-around align-items-center">
           <h3>Attendance</h3>
            </div>
    
            
<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Professor Name</th>
      <th scope="col">Course</th>
      <th scope="col">CLass</th>
      <th scope="col">Section</th>
      <th scope="col">Semester</th>
      <th scope="col" colspan="2">Time</th>
    
      <th scope="col">Option</th>
    </tr>
  </thead>
  {attendance1.map((val, key) => {
          return ( 
       
            <tbody>
                <tr>
                <th scope="row">{val.id}</th>
                <td>{val.professor_name}</td>
                <td>{val.subject}</td>
                <td>{val.class}</td>  
                <td>{val.section}</td>  
                <td>{val.semester}</td>  
                <td colspan="2">{val.start_time} - {val.end_time}</td> 
                      
                <td>
                    <button type="button" class="btn btn-danger" onClick={()=>deleteRecord(val.id)}>Delete</button>
                </td>
                </tr>
            </tbody>
             
             );
            })}
         
          
            </table>
             <CSVLink data={attendance1} headers={headers} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Mark Sheet</CSVLink>
    </div>
  

  );
}

export default Attendance
