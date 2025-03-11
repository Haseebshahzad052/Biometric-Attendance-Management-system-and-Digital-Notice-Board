const db = require("../db/db");

exports.deleteAttendance = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM attendance WHERE id = ?", id, (err, result) => {
    if (err) {
      console.error("Error deleting attendance:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.send(result);
  });
};

// apiController.js

const fetch = require("node-fetch");
const { response } = require("express");

// Handler for /api/timeout endpoint
exports.handleTimeout = async (req, res) => {
  const { name, timeout } = req.body;

  // Check that the value of `timeout` is not empty.
  if (!timeout) {
    res.status(400).send("Please enter a value for timeout");
    return;
  }

  // Change the value of `status` to `end`.
  const updateStatus = async () => {
    try {
      const response = await fetch(`/api/status`, {
        method: "PUT",
        body: JSON.stringify({ status: "end" }),
      });
      const data = await response.json();
      return data.status;
    } catch (error) {
      return null;
    }
  };

  // Update the value of the `timeout` column in the database.
  const updateTimeout = async () => {
    try {
      const response = await fetch(`/api/timeout/${name}`, {
        method: "PUT",
        body: JSON.stringify({ timeout }),
      });
      const data = await response.json();
      return data.timeout;
    } catch (error) {
      return null;
    }
  };

  const status = await updateStatus();
  const updatedTimeout = await updateTimeout();

  // Display an alert.
  if (status === null || updatedTimeout === null) {
    res.status(400).send("Error occurred while updating timeout");
  } else {
    res.status(200).send({ status, timeout: updatedTimeout });
  }
};
