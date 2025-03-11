require("dotenv").config();
const port = process.env.PORT || 8000;
const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const bodyParser = require("body-parser");
const profroutes = require("./routes/professorRoutes");
const schroutes = require("./routes/scheduleRoutes");
const reproutes = require("./routes/reportRoutes");
const attroutes = require("./routes/attendanceRoutes");
const notroutes = require("./routes/noticeboardRoutes");
const devroutes = require("./routes/devicesRoutes");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(cors());
app.use(express.json());
const app = express();
app.use(bodyParser.json());

//routes
app.use("/", profroutes);
app.use("/", schroutes);
app.use("/", reproutes);
app.use("/", attroutes);
app.use("/", notroutes);
app.use("/", devroutes);

/*
app.post("/timeinattendance", (req, res) => {
  // Get the data from the request body
  const name = req.body.name;

  const section = req.bodysection;
  
  const semester = req.body.semester;
  const subject = req.body.subject;
  
  const stime = req.body.stime;
 
  // Add the data to the database table `attendance`
  const sql = `
  INSERT INTO attandance( professor_name, subject, section, semester, start_time) 
  VALUES (?,?,?,?,?)
  `;


  db.query(sql, [name, subject, section, semester, stime], (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});
*/

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
