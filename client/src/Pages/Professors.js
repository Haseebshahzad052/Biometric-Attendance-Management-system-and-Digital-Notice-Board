import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from "react";
import Axios from "axios";
import './style.css';
// styleline50
//serverline 20

const Professors = () => {

//alert("User successfully registered!");
  
  const [record, setRecord] = useState([]);



  useEffect(()=>{
    fetch('http://localhost:8080/professor')
    .then(response => response.json())
    .then(data => setRecord(data))
    .catch(err => console.log(err))
  }, [])

 


   const deleteRecord = (id) => {
    Axios.delete(`http://localhost:8080/professordelete/${id}`).then((response)=> {
      setRecord(record.filter((val)=> {
        return val.id !== id;
      }))
    })
  }

 
  return (
    <div className='professor'>
    <div className="container-fluid Professors">
      
        
        
        <div className="row">
          <div className="col-md-12 p-1 ">
            <div className="header justify-content-around align-items-center">
           <h3>Professors List</h3>
            </div>
            </div>
          </div>
          <div>
            
        <div className="row">
          <div className="col-md-12">
            <button className="p-3 col-md-3 btn btn-primary justify-content-around align-items-center rounded" style={{}}>
        <NavLink to="/Professors/form" style={{ textDecoration: "none", color: "black"}} >
        ADD Professors
            </NavLink>
            </button>
        </div>
        </div>
        </div>
   
    <div className="row">
          <div className="col-md-12 p-1">
           
<table className="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">P. Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Course</th>
      <th scope="col">Department</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">Gender</th>
      <th scope="col">Age</th>
      <th scope="col">Code</th>
      <th scope="col">Active</th>
      
      <th scope="col" colspan="2" >Option</th>
    </tr>
  </thead>
       
        {record.map((val, key) => {
          return ( 
            
            <tbody>
            <tr>
            
            <th scope="row">{val.id}</th>
                <td>{val.first_name}</td>
                <td>{val.email}</td>
                <td>{val.contact}</td>
                <td>{val.subject}</td>
                <td>{val.department}</td>
                <td>{val.address}</td>
                <td>{val.city}</td>
                <td>{val.gender}</td>
                <td>{val.age}</td>   
                <td>{val.password}</td>            
                 <td>{val.status}</td>       
               <td>
               <Link type="button" class="btn btn-warning"  to={`/professorupdate/${val.id}`}>Update</Link>  
               </td>
                <td>
                <button type="button" class="btn btn-danger" onClick={()=>deleteRecord(val.id)}>Delete</button>
                </td>
                </tr>
              
            </tbody>
              
              );
            })}
          
              </table>
            </div></div>
         
        </div>
        
    </div>
  )
}

export default Professors
