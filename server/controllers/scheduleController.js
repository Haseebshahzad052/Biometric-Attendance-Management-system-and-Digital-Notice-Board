const db = require("../db/db");

exports.createInfo = (req, res) => {
  const { email, timeIn, timeOut } = req.body;

  db.query(
    `INSERT INTO info (email, timeIn, timeOut) VALUES (?, ?, ?)`,
    [email, timeIn, timeOut],
    (err, result) => {
      if (err) {
        console.error("Error inserting info:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.send("Values Inserted");
    }
  );
};

exports.createSchedule = (req, res) => {
  const {
    name,
    classs,
    section,
    session,
    semester,
    subject,
    room,
    stime,
    ftime,
  } = req.body;

  db.query(
    "INSERT INTO schedule (name, class, section, session, semester, subject, roomID, Start_time, end_time) VALUES (?,?,?,?,?,?,?,?,?)",
    [name, classs, section, session, semester, subject, room, stime, ftime],
    (err, result) => {
      if (err) {
        console.error("Error inserting schedule:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.send("Values Inserted");
    }
  );
};

exports.getAllSchedule = (req, res) => {
  db.query("SELECT * FROM schedule", (err, result) => {
    if (err) {
      console.error("Error fetching schedule:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.send(result);
  });
};

exports.timeInSchedule = (req, res) => {
  const { name, room } = req.body;

  db.query(
    "SELECT * FROM schedule WHERE name = ? AND roomID = ?",
    [name, room],
    (err, result) => {
      if (err) {
        console.error("Error in timeInSchedule route:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong ID" });
      }
    }
  );
};

exports.timeInAttendance = (req, res) => {
  const { name, section, semester, subject, stime } = req.body;

  db.query(
    "INSERT INTO attendance (professor_name, subject, section, semester, start_time) VALUES (?,?,?,?,?)",
    [name, subject, section, semester, stime],
    (err, result) => {
      if (err) {
        console.error("Error in timeInAttendance route:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.send("Values Inserted");
    }
  );
};
