import React, { useState } from 'react'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import './style.css';
//import styled from 'styled-components';
//import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
//import styled from 'styled-components';
import { Link, Outlet } from "react-router-dom";
import {
  FcBookmark,
  FcHome,
  FcBusinessman,
  FcClapperboard,
  FcSms,
  FcCalendar,
  FcAbout,
} from "react-icons/fc";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';


const options = [
  {
    name: 'Bar',
    scroll: false,
    backdrop: false,
  },
];
const Dashboard1 = ({ name, ...props }) => {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
 
  return (
    <div className='Dashboard'>

        <Navbar bg="light" className="navbar mb-3">
          <Container fluid>
          <Button variant="primary" onClick={toggleShow} className="me-2">
        {name}
      </Button>
      <NavDropdown title="Usama" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" >Logout</NavDropdown.Item>
            </NavDropdown>
            </Container>
            </Navbar>
            
            <Offcanvas show={show} onHide={handleClose} {...props} style={{ width:"35vh"}}>
        <Offcanvas.Header>
          <Offcanvas.Title className='title'>CS & IT</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="sidebar">
     
     <Link
       className="list-group-item py-2 my-1"
       style={{ textDecoration: "none", color: "black" }}
       to="/"
     >
       <FcHome className=" fs-4 me-2"></FcHome>
       <span className="fs-5">Home</span>
     </Link>{" "}
     <Link
       className="list-group-item py-2 my-1"
       style={{ textDecoration: "none", color: "black" }}
       to="/Attendance"
     >
       <FcBookmark className=" fs-4 me-2"></FcBookmark>
       <span className="fs-5">Attendance</span>
     </Link>
     <Link
       className="list-group-item py-2 my-1"
       style={{ textDecoration: "none", color: "black" }}
       to="/Reports"
     >
       <FcAbout className=" fs-4 me-2"></FcAbout>
       <span className="fs-5">Reports</span>
     </Link>
     <Link
       className="list-group-item py-2 my-1"
       style={{ textDecoration: "none", color: "black" }}
       to="/Professors"
     >
       <FcBusinessman className=" fs-4 me-2"></FcBusinessman>
       <span className="fs-5">Professors</span>
     </Link>
     <Link
       className="list-group-item py-2 my-1"
       style={{ textDecoration: "none", color: "black" }}
       to="/Scheduletable"
     >
       <FcCalendar className=" fs-4 me-2"></FcCalendar>
       <span className="fs-5">Schedule</span>
     </Link>
     <Link
       className="list-group-item py-2 my-1"
       style={{ textDecoration: "none", color: "black" }}
       to="/NoticeBoard"
     >
       <FcClapperboard className=" fs-4 me-2"></FcClapperboard>
       <span className="fs-5">NoticeBoard</span>
     </Link>
     <Link
       className="list-group-item py-2 my-1"
       style={{ textDecoration: "none", color: "black" }}
       to="/Notices"
     >
       <FcSms className=" fs-4 me-2"></FcSms>
       <span className="fs-5">Notices</span>
     </Link>
   </div>
        </Offcanvas.Body>
      </Offcanvas>
            
    <Outlet />
    </div>
  );
}
function Dashboard() {
  return (
    <>
      {options.map((props, idx) => (
        <Dashboard1 key={idx} {...props} />
      ))}
    </>
  );
}

export default Dashboard
