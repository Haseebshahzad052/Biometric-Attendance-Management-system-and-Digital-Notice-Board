import React from 'react'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import './style.css';
//import styled from 'styled-components';
//import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { NavDropdown } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

function Navbar({Toggle}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // perform logout logic here

    // navigate user back to login page
    navigate('/Login');
  };

  return (
    
    <nav className="navbar navbar-expand-sm navbar-white "> 
  { //bg-transparent
  //<i className="navbar-brand bi bi-justify-left" fs-4 onClick={Toggle}></i>
}
<div className='px-3'>
   <FaIcons.FaBars onClick={Toggle} />
   </div>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"><i className='bi bi-justify'></i></button>
    <div className="collapse navbar-collapse" id="NavId" >
   <div className="ms-auto" style={{ padding:"20px" }}>
    <NavDropdown title="Usama" id="admin">
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
