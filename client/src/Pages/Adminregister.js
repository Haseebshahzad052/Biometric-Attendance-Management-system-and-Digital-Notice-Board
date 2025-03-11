import React, { useEffect } from 'react'
import Axios from 'axios'
import { useState } from 'react'
//styleline 134
// serverline 230

const Adminregister = () => {

   
    const [username, setUserName] = useState('');
    const [pswd, setPswd] = useState('');
    const [email, setEmail] = useState('');
  
    const [adminregisterstatus, setAdminRegisterstatus] = useState('');
  
  const registeradmin = (e) =>{
  e.preventDefault();
  Axios.post('http://localhost:8080/registeradmin', {
    
    username: username,
    pswd: pswd,
    email: email,
  }).then((response) =>{
    if(response.data.message){
      setAdminRegisterstatus(response.data.message);
    }else{
      setAdminRegisterstatus("account created successfully");
    }
  })
  }
  
  return (
    <div className='registeradmin'>
         <div className="row">
          <div className="col-md-12 p-1 ">
            <div className="header justify-content-around align-items-center">
           <h3>Registeration form</h3>
            </div>
            </div>
          </div>
          <div>

          <div className='registerform'>
        <form>
  <div class="form-row">
  <div class="form-group col-md-4"></div>
    <div class="form-group col-md-4">
      <label for="username">UserName</label>
      <input type="text" class="form-control" id="username" onChange={(e) => {setUserName(e.target.value)}} placeholder='enter name' required/>
    </div>
    <div class="form-group col-md-4"></div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-4"></div>
    <div class="form-group col-md-4">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" onChange={(e) => {setPswd(e.target.value)}} placeholder='enter pswd' required />
    </div>
    <div class="form-group col-md-4">
    <label for="inputemail">Email</label>
      <input type="email" class="form-control" id="inputemail" onChange={(e) => {setEmail(e.target.value)}} placeholder='enter email' required/>
    </div>
  </div>
  <button type="submit" class="btn btn-primary" onClick={registeradmin} >Register</button>
   <h4>{adminregisterstatus}</h4>
</form>
</div>
{
  //style={{color:'red', fontSize:'10px', textAlign:'center', marginTop:'20px'}}
}
</div>
      </div>
  )
}

export default Adminregister
