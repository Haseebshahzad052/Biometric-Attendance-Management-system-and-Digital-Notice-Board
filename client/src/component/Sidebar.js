import React from "react";
//import styled from 'styled-components';
import { Link } from "react-router-dom";

//import * as AiIcons from 'react-icons/ai';
//import { IconContext } from 'react-icons/lib';
import {
  FcBookmark,
  FcHome,
  FcBusinessman,
  FcClapperboard,
  FcSms,
  FcCalendar,
  FcAbout,
  FcMultipleDevices,
  FcDataConfiguration,
} from "react-icons/fc";
import "./style.css";
function Sidebar() {
  return (
    <>
    <div className="sidebar bg-white p-2">
    <div>
      {/*<i className='bi bi-bootstrap-fill my-2'></i>*/}
      <span className="brand-name fs-2" >CS & IT</span>
    </div>
    <hr className="text-dark" />
    <div className="list-group list-group-flush">
     
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
        to="/DeviceSetup"
      >
        <FcMultipleDevices className=" fs-4 me-2"></FcMultipleDevices>
        <span className="fs-5">DeviceSetup</span>
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
      <Link
        className="list-group-item py-2 my-1"
        style={{ textDecoration: "none", color: "black" }}
        to="/dummy"
      >
        <FcDataConfiguration className=" fs-4 me-2"></FcDataConfiguration>
        <span className="fs-5">Dummy</span>
      </Link>
    </div>
  </div>
</>
  );
}
export default Sidebar;
