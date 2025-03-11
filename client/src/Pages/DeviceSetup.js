import React, { useEffect } from 'react'
import { NavLink} from 'react-router-dom'
import { useState } from "react";
import Axios from "axios";
import './style.css';

const DeviceSetup = () => {

      
  const [record, setRecord] = useState([]);
  
  
    useEffect(()=>{
      fetch('http://localhost:8080/devicesetup')
      .then(response => response.json())
      .then(data => setRecord(data))
      .catch(err => console.log(err))
    }, [])
  

    const deleteRecord = (id) => {
        Axios.delete(`http://localhost:8080/devicesetupdelete/${id}`).then((response)=> {
          setRecord(record.filter((val)=> {
            return val.id !== id;
          }))
        })
      }

    
    
      const [buttonText, setButtonText] = useState('Connect');

      function handleClick() {
        setButtonText('Connected');
      }
      


  return (
    <div>
      <div className='devicesetup'>
    <div className="container-fluid Devicesetup">
      
        
        
        <div className="row">
          <div className="col-md-12 p-1 ">
            <div className="header justify-content-around align-items-center">
           <h3>Device Details</h3>
            </div>
            </div>
          </div>
   
    <div className="row">
          <div className="col-md-12 p-1">
           
<table className="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">IP Address</th>
      <th scope="col">Device ID</th>
      <th scope="col">Commen Key</th>
      <th scope="col">Port Address</th>
      
      <th scope="col" colspan="2" style={{alignContent:"center"}}>Option</th>
    </tr>
  </thead>
       
        {record.map((val, key) => {
          return ( 
            
            <tbody>
            <tr>
            
            <th scope="row">{val.id}</th>
                <td>{val.device_name}</td>
                <td>{val.IP_address}</td>
                <td>{val.device_id}</td>
                <td>{val.commen_key}</td>
                <td>{val.port_address}</td>
                    
                <td>
                    <button type="button" class="btn btn-warning" onClick={handleClick}>{buttonText}</button>
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
            <div>
            <button className="p-3 btn btn-warning justify-content-around align-items-center rounded" style={{}}>
        <NavLink to="/Deviceform" style={{ textDecoration: "none", color: "black"}} >
        ADD New Device
            </NavLink>
            </button>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default DeviceSetup
