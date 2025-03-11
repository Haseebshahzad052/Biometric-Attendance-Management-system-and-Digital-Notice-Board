import React, { useEffect } from 'react'
import { NavLink} from 'react-router-dom'
import { useNavigate} from 'react-router-dom'
import Axios from 'axios'
import { useState } from 'react'
import './style.css';
//styleline 134
// serverline 230
const Adminlogin = () => {
    const [username, setUserName] = useState('');
    const [pswd, setPswd] = useState('');
    const [adminloginstatus, setAdminLoginstatus] = useState('');


    const navigateTo = useNavigate();
  
  const loginadmin = (e) =>{
    e.preventDefault();
    Axios.post('http://localhost:8080/loginadmin', {
      username: username,
      pswd: pswd,
    }).then((response) =>{
      if(response.data.message){
        setAdminLoginstatus(response.data.message);
      }else{
        setAdminLoginstatus(response.data[0].email);
        navigateTo('/')
      }
    })
  }
 

  return (
    <div className='adminlogin'> 
        <div className='admin'>
        <div className="row">
          <div className="col-md-12 p-1 ">
            <div className="header justify-content-around align-items-center">
           <h3>Login form</h3>
            </div>
            </div>
          </div>
          <div className='loginform'>
        <form>
  <div class="row">
    <div class="form-group col-md-4">
      <label for="username">UserName</label>
      <input type="text" class="form-control" id="username" placeholder="username" onChange={(e) => {setUserName(e.target.value)}}  />
    </div>
    </div>
    <div class="row">
    <div class="form-group col-md-4">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => {setPswd(e.target.value)}} />
    </div>
  </div>
  <div className='row'>
    <div className='col-md-3'>
    
  <button type="submit" class="btn btn-primary" onClick={loginadmin}>Login</button>
  </div>
  <div className='col-md-2'>
  <NavLink to="/admin/register">Register</NavLink>
  </div>
  </div>
  <h4 >{adminloginstatus}</h4>
</form>
</div>
    {
      //style={{color:'red', fontSize:'20px', textAlign:'center', marginTop:'20px'}}
    }
        </div>
      
    </div>
  )
}

export default Adminlogin
