import React, { useEffect } from 'react'
import { NavLink} from 'react-router-dom'
import Axios from 'axios'
import { useState } from 'react'
import './style.css';
//styleline 134
// serverline 230

const Dummy = () => {

  const [name, setName] = useState('');
    const [pin, setPin] = useState('');
    const [adminloginstatus, setAdminLoginstatus] = useState('');
    const [email, setEmail] = useState('');
    const [loginstatus, setLoginstatus] = useState('');
  
  
    async function loginadmin(e) {
      e.preventDefault();
    // Make a request to the first API
    const response1 = await Axios.post('http://localhost:8080/dummy', {
      name: name,
      pin: pin,
    });
  
    // Make a request to the second API
    const response2 = await Axios.post('http://localhost:8080/dummyu', {
      email: email,
    });

      // Check the response status codes
  if (response1.status === 200 && response2.status === 200) {
    // Set the login status
    const adminLoginStatus = `
      name: ${response1.data[0].name}
      pin: ${response1.data[0].pin}
      email: ${response1.data[0].email}
      email: ${response2.data[0].email}
      timeIn: ${response2.data[0].timeIn}
      timeOut: ${response2.data[0].timeOut}
      
    `;
    setAdminLoginstatus(adminLoginStatus);
  } else {
    // Set the login status to an error message
    setAdminLoginstatus("Error logging in");
  }
};
  
/*
    // Check the response status codes
    if (response1.status === 200 && response2.status === 200) {
      // Set the login status
      
      setAdminLoginstatus(response1.data[0].email + " " + response2.data[0].timeIn);
    } else {
      // Set the login status to an error message
      setAdminLoginstatus("Error logging in");
    }
  };
  */

  
  return (
    <div className='adminlogin'> 
    <div className='admin'>
    <div className="row">
      <div className="col-md-12 p-1 ">
        <div className="header justify-content-around align-items-center">
       <h3>Attendance form</h3>
        </div>
        </div>
      </div>
      <div className='loginform'>
    <form>
<div class="row">
<div class="form-group col-md-4">
  <label for="username">Name</label>
  <input type="text" class="form-control" id="username" placeholder="username" onChange={(e) => {setName(e.target.value)}}  />
</div>
</div>
<div class="row">
<div class="form-group col-md-4">
  <label for="inputPassword4">Pin</label>
  <input type="password" class="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => {setPin(e.target.value)}} />
</div>
</div>
<div className='row'>
        
        <div className='col-4'>
        
        <div class="form-group mx-sm-3 mb-2">
    <label for="searchid" class="sr-only">Email</label>
    <input type="text" class="form-control" id="searchid" placeholder="Enter ID"
    onChange={(e) => {setEmail(e.target.value)}}
     />
  </div>

        </div>
      
    
    </div>
<div className='row'>
<div className='col-md-3'>

<button type="submit" class="btn btn-primary" onClick={loginadmin}>Login</button>
</div>

</div>
<h4 >{adminloginstatus}</h4>
</form>
</div>

    </div>
  
</div>
  )
}

export default Dummy
