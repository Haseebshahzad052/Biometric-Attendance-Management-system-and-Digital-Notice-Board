import React, { useState, useEffect } from "react";
import axios from "axios";


const Timeout = () => {
  const [status, setStatus] = useState('');
  const [timeout, setTimeout] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    // Get the value of `status` from the database.
    const fetchStatus = async () => {
      const response = await fetch('/api/status');
      const data = await response.json();
      setStatus(data.status);
    };

    fetchStatus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check that the value of `timeout` is not empty.
    if (timeout === '') {
      alert('Please enter a value for timeout');
      return;
    }

    // Change the value of `status` to `end`.
    setStatus('end');

    // Update the value of the `timeout` column.
    const updateTimeout = async () => {
      const response = await fetch(`/api/timeout/${name}`, {
        method: 'PUT',
        body: JSON.stringify({ timeout }),
      });
      const data = await response.json();
      setTimeout(data.timeout);
    };

    updateTimeout();

    // Display an alert.
    alert('Timeout updated');
  };
  return (
    <div>
      <h1>Update Timeout</h1>

      <input
        type="time"
        placeholder="Timeout"
        value={timeout}
        onChange={(e) => setTimeout(e.target.value)}
      />

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
<h1>{status}</h1>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Timeout



