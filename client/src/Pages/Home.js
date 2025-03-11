import React from "react";
import { NavLink} from 'react-router-dom'
import './style.css';
//styleline 6

function Home() {

  
  const newTab=url=>{
    window.open(url)
  }

  return (
   <div className="home">
 
      <div className="container-fluid">
        <div className="row g-3 my-2">
        <div className="col-md-3 p-1">
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/Attendance"> 
         <div className="dashboard p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h2 className="fs-2">Attendance</h2>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Reports">
            <div className="dashboard p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h2 className="fs-2">Report</h2>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Professors">
            <div className="dashboard p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Professor</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/scheduletable/Schedule">
            <div className="dashboard p-3 bg-primary shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">TimeTable</h3>
              </div>
            </div>
            </NavLink>
          </div>
         
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Scheduletable">
            <div className="dashboard p-3 bg-primary shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Schedule</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/NoticeBoard">
            <div className="dashboard p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">NoticePage</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Notices">
            <div className="dashboard p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Notices</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Biometric Machine">
            <div className="dashboard p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Biometric Professor</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Login">
            <div className="dashboard p-3 bg-success shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Admin</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <div className="broadcast">
            <div className="dashboard p-3 bg-primary shadow-sm d-flex justify-content-around align-items-center rounded" 
             onClick={()=> newTab('http://localhost:3000/Broadcast')}>
              <div>
                <h3 className="fs-2">Display</h3>
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Devicesetup">
            <div className="dashboard p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Device Setup</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/testy">
            <div className="dashboard p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Test</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/timein">
            <div className="dashboard p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Timein</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/timeout">
            <div className="dashboard p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Timeout</h3>
              </div>
            </div></NavLink>
          </div>
          
     {/*    <div className='col-3'>
  <div className="broadcast">
<button className="p-3 btn btn-primary justify-content-around align-items-center rounded" style={{width:"250px"}}
 onClick={()=> newTab('http://localhost:3000/Broadcast')}>
  Broadcast
            </button>
  </div>
  </div>
  */}
        </div>
        
      </div>
      </div>
  );
}

export default Home;
