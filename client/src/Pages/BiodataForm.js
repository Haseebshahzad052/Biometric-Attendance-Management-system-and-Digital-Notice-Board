import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
//import { ToastContainer, toast } from 'react-toastify';
import './style.css'
//styleline
//serverline 20

const BiodataForm = () => {

  const preventMinus = (e) => {
    if (e.code === 'Minus') {
        e.preventDefault();
    }
};

  const [fname, setFName] = useState('')
  const [lname, setLName] = useState('')
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('')
  const [pswd, setPswd] = useState('')
  const [subject, setSubject] = useState('')
  const [department, setDepartment] = useState('')
  const [add, setAdd] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [contact, setContact] = useState(0)

  const [registerstatus, setRegisterstatus] = useState('')

  const [error, setError] = useState(false)

  //const ffname = useRef("");

  const addProfessor = (e) => {
    e.preventDefault()
    //ffname.current.value = "" ;
    if (
      fname.length === 0 ||
      lname.length === 0 ||
      pswd.length === 3 ||
      subject.length === 0 ||
      department.length === 0 ||
      add.length === 0 ||
      city.length === 0 ||
      email.length === 0
    ) {
      setError(true)
    }
    Axios.post('http://localhost:8080/create', {
      fname: fname,
      lname: lname,
      contact: contact,
      email: email,
      pswd: pswd,
      subject: subject,
      department: department,
      add: add,
      city: city,
      gender: gender,
      age: age,
      status: status,
    }).then((response) => {
      if (response.data.message) {
        setRegisterstatus(response.data.message)
      } else {
       // setRegisterstatus('Data Inserted successfully')
       window.location.reload(false);
      }
    })
  }

  return (
    <div className="formprofessor" >
      <h1>Professor Details</h1>
      <div class="container mt-4">
        <form class="row g-3" onSubmit={(x)=>{
        addProfessor(x);
        //setFName("")
        }}>
          <div class="col-md-4">
            <label for="pfname" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="pfname"
              onChange={(event) => {
                setFName(event.target.value)
              }}
            />
            {error && fname.length <= 0 ? (
              <label style={{ color: 'red' }}>First Name can't be empty</label>
            ) : (
              ''
            )}
          </div>
          <div class="col-md-4">
            <label for="plname" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="plname"
              onChange={(event) => {
                setLName(event.target.value)
              }}
            />
            {error && lname.length <= 0 ? (
              <label style={{ color: 'red' }}>Last Name can't be empty</label>
            ) : (
              ''
            )}
          </div>
          <div class="col-md-4">
            <label for="pcontact" class="form-label">
              Contact no.
            </label>
            <input
              type="text"
              class="form-control"
              id="pcontact"
              onChange={(event) => {
                setContact(event.target.value)
              }}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="pemail" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="pemail"
              onChange={(event) => {
                setEmail(event.target.value)
              }}
              required
            />
            {error && email.length <= 0 ? (
              <label style={{ color: 'red' }}>Email can't be empty</label>
            ) : (
              ''
            )}
          </div>
          <div class="col-md-4">
            <label for="ppin" class="form-label">
              4 Digit Password
            </label>
            <input
              type="password"
              class="form-control"
              id="ppin"
              min="4"
              onKeyPress={preventMinus}
              onChange={(event) => {
                setPswd(event.target.value)
              }}
              required
            />
            
            {error && pswd.length <= 3 ? (
              <label style={{ color: 'red' }}>
                Password must not be less then 4 digit
              </label>
            ) : (
              ''
            )}
          </div>
          <div class="col-md-4">
            <label for="psubject" class="form-label">
              Subject
            </label>
            <input
              type="text"
              class="form-control"
              id="psubject"
              onChange={(event) => {
                setSubject(event.target.value)
              }}
              required
            />
            {error && subject.length <= 0 ? (
              <label style={{ color: 'red' }}>Must Enter Subject</label>
            ) : (
              ''
            )}
          </div>
          <div class="col-md-4">
            <label for="pdepart" class="form-label">
              Department
            </label>
            <input
              type="text"
              class="form-control"
              id="pdepart"
              onChange={(event) => {
                setDepartment(event.target.value)
              }}
            />
            {error && department.length <= 0 ? (
              <label style={{ color: 'red' }}>Must Enter Department</label>
            ) : (
              ''
            )}
          </div>
          <div class="col-12">
            <label for="pAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="pAddress"
              onChange={(event) => {
                setAdd(event.target.value)
              }}
              placeholder="1234 Main St"
            />
            {error && add.length <= 0 ? (
              <label style={{ color: 'red' }}>Must Enter Address</label>
            ) : (
              ''
            )}
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              onChange={(event) => {
                setCity(event.target.value)
              }}
            />
            {error && city.length <= 0 ? (
              <label style={{ color: 'red' }}>Must Enter City</label>
            ) : (
              ''
            )}
          </div>
          <div class="col-md-3">
            <label for="gender" class="form-label">
              Gender
            </label>
            <select
              id="gender"
              class="form-select"
              onChange={(event) => {
                setGender(event.target.value)
              }}
            >
              <option selected>Choose...</option>
              <option value={'male'}>Male</option>
              <option value={'female'}>Female</option>
              <option value={'other'}>others</option>
            </select>
          </div>
          <div class="col-md-1">
            <label for="age" class="form-label">
              Age
            </label>
           
            <input
              type="number"
              class="form-control"
              id="age"
              min="22"
              onKeyPress={preventMinus}
              onChange={(event) => {
                setAge(event.target.value)
              }}
              required
            />
          </div>
          <div class="col-md-1">
            <label for="status" class="form-label">
              Status
            </label>
            <select
              id="status"
              class="form-select"
              onChange={(event) => {
                setStatus(event.target.value)
              }}
            >
            <option selected>Choose...</option>
              <option value={'Active'}>Active</option>
              <option value={'Inactive'}>InActive</option>
              
            </select>
          </div>

          <div class="col-12">
            
          </div>
          <div class="col-12">
            <button
              type="submit"
              class="btn btn-primary"
              // onClick={addProfessor}
            >
              Submit
            </button>
          </div>
          <h4
            style={{
              color: 'Green',
              fontSize: '40px',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            {registerstatus}
          </h4>
        </form>
      </div>
    </div>
  )
}

export default BiodataForm
