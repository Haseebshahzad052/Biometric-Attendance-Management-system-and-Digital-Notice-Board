const db = require("../db/db");

exports.getReports = (req, res) => {
  db.query("SELECT * FROM report", (err, result) => {
    if (err) {
      console.error("Error fetching reports:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.send(result);
  });
};

exports.deleteReport = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM report WHERE id = ?", id, (err, result) => {
    if (err) {
      console.error("Error deleting report:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.send(result);
  });
};

exports.getAttendance = (req, res) => {
  db.query("SELECT * FROM attendance", (err, result) => {
    if (err) {
      console.error("Error fetching attendance:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.send(result);
  });
};
