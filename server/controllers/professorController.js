const db = require("../db/db");

exports.createProfessor = (req, res) => {
  const {
    fname,
    lname,
    age,
    gender,
    pswd,
    subject,
    department,
    add,
    city,
    email,
    contact,
    status,
  } = req.body;

  db.query(
    "INSERT INTO professors (first_name, last_name, age, gender, password, subject, department, address, city, email, contact, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      fname,
      lname,
      age,
      gender,
      pswd,
      subject,
      department,
      add,
      city,
      email,
      contact,
      status,
    ],
    (err, result) => {
      if (err) {
        console.error("Error inserting values:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.send("Values Inserted");
    }
  );
};

exports.getAllProfessors = (req, res) => {
  db.query("SELECT * FROM professors", (err, result) => {
    if (err) {
      console.error("Error fetching professors:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.send(result);
  });
};

exports.updateProfessor = (req, res) => {
  const {
    fname,
    lname,
    age,
    gender,
    pswd,
    subject,
    department,
    add,
    city,
    email,
    contact,
    id,
  } = req.body;

  db.query(
    "UPDATE professors SET first_name = ?, last_name = ?, age = ?, gender = ?, password = ?, subject = ?, department = ?, address = ?, city = ?, email = ?, contact = ? WHERE id = ?",
    [
      fname,
      lname,
      age,
      gender,
      pswd,
      subject,
      department,
      add,
      city,
      email,
      contact,
      id,
    ],
    (err, result) => {
      if (err) {
        console.error("Error updating professor:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.send(result);
    }
  );
};

exports.deleteProfessor = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM professors WHERE id = ?", id, (err, result) => {
    if (err) {
      console.error("Error deleting professor:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.send(result);
  });
};

exports.registerAdmin = (req, res) => {
  const { email, username, pswd } = req.body;

  db.query(
    "INSERT INTO admin (username, password, email) VALUES (?,?,?)",
    [username, pswd, email],
    (err, result) => {
      if (err) {
        console.error("Error registering admin:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.send("Values Inserted");
    }
  );
};

exports.loginAdmin = (req, res) => {
  const { username, pswd } = req.body;

  db.query(
    "SELECT * FROM admin WHERE username = ? AND password = ?",
    [username, pswd],
    (err, result) => {
      if (err) {
        console.error("Error logging in admin:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username or password" });
      }
    }
  );
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
};

exports.dummy = (req, res) => {
  const { name, pin } = req.body;

  db.query(
    "SELECT * FROM users WHERE name = ? AND pin = ?",
    [name, pin],
    (err, result) => {
      if (err) {
        console.error("Error in dummy route:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong name or pin" });
      }
    }
  );
};

exports.dummyu = (req, res) => {
  const { email } = req.body;

  db.query("SELECT * FROM info WHERE email = ?", [email], (err, result) => {
    if (err) {
      console.error("Error in dummyu route:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong email" });
    }
  });
};

exports.timeinProfessor = (req, res) => {
  const { name, password } = req.body;

  db.query(
    "SELECT * FROM professors WHERE first_name = ? AND password = ?",
    [name, password],
    (err, result) => {
      if (err) {
        console.error("Error in timeinProfessor route:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong name or password" });
      }
    }
  );
};
