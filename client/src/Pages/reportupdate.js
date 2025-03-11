import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Reportupdate = () => {

  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    name: '',
    course: '',
    classs: '',
    section: '',
    semester: '',
    time: '',
  });
  


  useEffect(() => {
    axios.get('http://localhost:8080/reupdate/'+id)
    .then(res => {
      setValues({...values, name: res.data.name, course: res.data.course, classs: res.data.classs, section: res.data.section, semester: res.data.semester, time: res.data.time})
    })
    .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/reupdate/'+id, values)
    .then(res => {
      navigate('/Reports');
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="update">
      <div className="container">
        <div className="header">
          <h5 className="title" style={{ color: 'black' }}>
            updateRecord
          </h5>
        </div>
        <div className="body">
          <form className="row g-3" onSubmit={handlesubmit}>
            {/* Your form inputs */}
            <div className="col-md-6">
              <label htmlFor="name" className="form-label" style={{ color: 'black' }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={values.name}
                onChange={e => setValues({...values, name: e.target.value})}
               
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="course" className="form-label" style={{ color: 'black' }}>
                Course
              </label>
              <input
                type="text"
                className="form-control"
                id="course"
                name="course"
                value={values.course}
                onChange={e => setValues({...values, course: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="class" className="form-label" style={{ color: 'black' }}>
                class
              </label>
              <input
                type="text"
                className="form-control"
                id="class"
                name="class"
                value={values.classs}
                onChange={e => setValues({...values, classs: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="section" className="form-label" style={{ color: 'black' }}>
                section
              </label>
              <input
                type="text"
                className="form-control"
                id="section"
                name="section"
                value={values.section}
                onChange={e => setValues({...values, section: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="semester" className="form-label" style={{ color: 'black' }}>
                semester
              </label>
              <input
                type="text"
                className="form-control"
                id="semester"
                name="semester"
                value={values.semester}
                onChange={e => setValues({...values, semester: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="time" className="form-label" style={{ color: 'black' }}>
                time
              </label>
              <input
                type="text"
                className="form-control"
                id="time"
                name="time"
                value={values.time}
                onChange={e => setValues({...values, time: e.target.value})}
              />
            </div>
            
            <div className="footer">
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reportupdate;
