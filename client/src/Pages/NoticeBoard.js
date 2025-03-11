import React, { useEffect }  from 'react'
import { useState } from "react";
//import Table from "react-bootstrap/Table";
import { FcExpired, FcApproval, FcElectronics, FcGoogle } from 'react-icons/fc';
import './style.css';
//styleline 80

const NoticeBoard = () => {


  const [noticeboard1, setNoticeboard1] = useState([]);
    
  useEffect(()=>{
      fetch('http://localhost:8080/noticeboard1')
      .then(response => response.json())
      .then(data => setNoticeboard1(data))
      .catch(err => console.log(err))
    }, [])



  return (
    <div className='noticeboard'>
      <div className="row">
          <div className="col-md-12 p-1 ">
            <div className="header justify-content-around align-items-center">
           <h3>CS & IT</h3>
            </div>
            </div>
          </div>
    <div className="container-fluid">
    {noticeboard1.map((val, key) => {
          return ( 
    <div className="row g-3 my-2">
      <div className="col-md-3 p-1">
        <div className="p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
          <div>
            <h3 className="fs-2"><FcExpired></FcExpired> {val.notice_heading}</h3>
            <p className="fs-5">{val.notice}</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 p-1">
        <div className="p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
          <div>
            <h3 className="fs-2"><FcGoogle></FcGoogle>Google</h3>
            <p className="fs-5">Friday, from 7am to 5pm, a job fair is held.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 p-1">
        <div className="p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
          <div>
            <h3 className="fs-2"><FcApproval></FcApproval>Android</h3>
            <p className="fs-5">Android workshop is in lab-101</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 p-1">
        <div className="p-3 bg-primary shadow-sm d-flex justify-content-around align-items-center rounded">
          <div>
            <h3 className="fs-2"><FcElectronics></FcElectronics>IOT workshop</h3>
            <p className="fs-5">IOT based seminar is at friday 10:am.</p>
          </div>
        </div>
      </div>
    </div>
          );
        })}
        

      <div className="row">
          <div className="col-md-12 p-1">
          <div>
    
    
            
    <table class="table table-dark" align="center">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Professor Name</th>
          <th scope="col">Course</th>
          <th scope="col">CLass</th>
          <th scope="col">Section</th>
          <th scope="col">Semester</th>
          <th scope="col">Room no.</th>
        
    
        </tr>
      </thead>
      {noticeboard1.map((val, key) => {
          return ( 
                <tbody>
                    <tr>
                    <th scope="row">{val.id}</th>
                    <td>{val.professor_name}</td>
                    <td>{val.subject}</td>
                    <td>{val.class}</td>  
                    <td>{val.section}</td>  
                    <td>{val.semester}</td> 
                    <td>{val.roomID}</td> 
                   
         
                    </tr>
                    <tr>
                    <th scope="row">01</th>
                    <td>Dr. Sami</td>
                    <td>ICT</td>
                    <td>BSCS</td>  
                    <td>Reg</td>  
                    <td>8th</td> 
                    <td>Cl-09</td> 
                    
                    </tr>
                    <tr>
                    <th scope="row">02</th>
                    <td>Dr. Muhammad Illyas</td>
                    <td>CP-1</td>
                    <td>BSSE</td>  
                    <td>Reg</td>  
                    <td>8th</td> 
                    <td>Lab-102</td> 
                   
         
                    </tr>
                </tbody>
                
                );
              })}
              
                </table>
               
        </div>
            </div>
            </div>
    </div>
    </div>
  )
}

export default NoticeBoard
