
import React, { useEffect }  from 'react';
import Axios from "axios";
import { useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import './style.css';
//styleline
//serverline 138



const headers = [
  {label:"ID", key:"id"},
  {label:"Name", key:"professor_name"},
  {label:"Course", key:"subject"},
  {label:"Class", key:"class"},
  {label:"Section", key:"section"},
  {label:"Semester", key:"semester"},
  {label:"Time", key:"time"},
]


const Reports = () => {
  

  const [report1, setReport1] = useState([]);

    
  useEffect(()=>{
      fetch('http://localhost:8080/report')
      .then(response => response.json())
      .then(data => setReport1(data))
      .catch(err => console.log(err))
    }, [])





    const deleteRecord = (id) => {
      Axios.delete(`http://localhost:8080/reportdelete/${id}`).then((response)=> {
        setReport1(report1.filter((val)=> {
          return val.id !== id;
        }))
      })
    }
  




  return(
    
    <div className='report'>
     <div className="header justify-content-around align-items-center">
           <h3>Reports</h3>
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
      <th scope="col">TIme</th>

      
      <th scope="col">Option</th>
    </tr>
  </thead>
  {report1.map((val, key) => {
          return ( 
       
            <tbody>
                <tr>
                <th scope="row">{val.id}</th>
                <td>{val.professor_name}</td>
                <td>{val.subject}</td>
                <td>{val.class}</td>  
                <td>{val.section}</td>  
                <td>{val.semester}</td>  
                <td>{val.time}</td>        
                <td>
                    <Link type="button" class="btn btn-warning"  to={`/reportupdate/${val.id}`}>Edit</Link>  
                    <button type="button" class="btn btn-danger" onClick={()=>deleteRecord(val.id)} >Delete</button>
                </td>
                </tr>
            </tbody>
            
            );
          })}
       
          
            </table>
          <CSVLink data={report1} headers={headers} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Generate Report</CSVLink>
    
    </div>
  )
}

export default Reports

   

       
