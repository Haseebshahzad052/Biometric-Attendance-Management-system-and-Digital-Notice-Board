import React, { useState } from "react";
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/package.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../routes";
import Home from "../Pages/Home";
import './App.css'
import Adminregister from "../Pages/Adminregister";
import Broadcast from "../Pages/Broadcast";
import Adminlogin from "../Pages/Adminlogin";
import Reportupdate from "../Pages/reportupdate";
import Updateprofessor from "../Pages/Updateprofessor";

function App() {

  

  const [toggle, settoggle] = useState(true);
  const Toggle = () => {
    settoggle(!toggle);
  };
  return (
    <BrowserRouter>
      <div className="container-fluid min-vh-100" style={{backgroundColor:"#fff"}}>
      <div className="row">
      
       <div className="px-0">
         <Navbar  Toggle={Toggle}/>
       </div>
      
       </div>
          <div className="row">
          
            <div className="sd col-4 col-md-2 py-10  vh-100 position-fixed">
                {toggle && <Sidebar />}
            </div>
          
             <div className=" pg col-4 col-md-2"></div>
          <div className="col">
            <Routes>
              <Route exact path="/" element={<Home />} />
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
              
            </Routes>
            <Routes>
            <Route path="/admin/register" element={<Adminregister />} />
            <Route path="/Login" element={<Adminlogin />} />
            <Route path="/Broadcast" element={<Broadcast />} ></Route>
            <Route path= "/reportupdate/:id" element={<Reportupdate />} ></Route>
            <Route path= "/professorupdate/:id" element={<Updateprofessor />} ></Route>
            
            </Routes>
          </div>
        </div>
      </div>
      <div>
{//(typeof backendData.users === 'undefined') ? (
//<p>loading..</p>
       // ): (
        //  backendData.users.map((users, i) =>(
          //  <p key={i}>{users}</p>
          //))
        //);
}
      </div>
    </BrowserRouter>
  );
}

export default App;
