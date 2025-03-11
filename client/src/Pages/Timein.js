
import React from 'react'
import { useState, useEffect } from 'react'
import './style.css';
import Axios from "axios";

const Timein = () => {


    


  const [name, setName] = useState("");
  
  const [password, setPassword] = useState("");
  const [room, setRoom] = useState("");
  const [stime, setSTime] = useState("");
  const [status, setStatus] = useState("not connected");
  const [id ] = useState(0);

  const [adminloginstatus, setAdminLoginstatus] = useState('');


  async function timein(e) {
    e.preventDefault();
  // Make a request to the first API
  const response1 = await Axios.post('http://localhost:8080/timeinprofessor', {
    name: name,
    password: password,
  });

  // Make a request to the second API
  const response2 = await Axios.post('http://localhost:8080/timeinschedule', {
    name: name,
    room: room,

  });
     // Check the response status codes
     if (response1.status === 200 && response2.status === 200) {
      // Set the login status
      const adminLoginStatus = `
        name: ${response1.data[0].first_name}
        password: ${response1.data[0].password}
        name: ${response2.data[0].name}
        class: ${response2.data[0].class}
        section: ${response2.data[0].section}
        session: ${response2.data[0].session}
        semester: ${response2.data[0].semester}
        subject: ${response2.data[0].subject}
        start_time: ${response2.data[0].start_time}
        
      `;
      setAdminLoginstatus(adminLoginStatus);
      setStatus("connected");
      
    } else {
      // Set the login status to an error message
      setAdminLoginstatus("Error logging in");
    }
  };
    


  
  return (
    <div>
      <div>
      <div className='schedule'>
     <div className="row">
          <div className="col-md-12 p-1 ">
            <div className="header justify-content-around align-items-center">
           <h3>Time IN</h3>
            </div>
            </div>
          </div>
       <div class="container mt-4" >
    <form class="row g-3" onSubmit={timein}>
  <div class="col-md-6">
    <label for="inputname" class="form-label">Professor Name</label>
    <input type="text" class="form-control" id="inputname" 
    value={name}
    onChange={(e) => {
      setName(e.target.value);
    }}
     required 
    />
  </div>
  
  <div class="col-4">
    <label for="inputsec" class="form-label">Pin</label>
    <input type="password" class="form-control" id="inputsec" placeholder="" 
    value={password}
    onChange={(e) => {
      setPassword(e.target.value);
    }}
     required 
     />
  </div>
  <div class="col-4">
    <label for="inputsession" class="form-label">roomID</label>
    <input type="text" class="form-control" id="inputsession" placeholder="" 
    value={room}
    onChange={(e) => {
      setRoom(e.target.value);
    }}
     required 
     />
  </div>
  <div class="col-md-6">
    <label for="inputname" class="form-label">Professor Name</label>
    <input type="text" class="form-control" id="inputname" 
    value={name}
    onChange={(e) => {
      setName(e.target.value);
    }}
     required 
    />
  </div>

 
  <div className="buttonschedule">
    <div className="row">
  <div class="col-12">
    <button type="submit" class="btn btn-primary justify-content-around align-items-center rounded">Submit</button>
  </div>
  </div>
  </div>
  <h4 >{adminloginstatus}</h4>
  <p>Status: {status}</p>
</form>
</div>










</div>
  </div>
    </div>
  )
}

export default Timein



