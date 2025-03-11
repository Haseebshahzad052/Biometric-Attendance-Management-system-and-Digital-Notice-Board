const express = require("express");
const router = express.Router();
const scheduleController = require("../controllers/scheduleController");

router.post("/createInfo", scheduleController.createInfo);
router.post("/createSchedule", scheduleController.createSchedule);
router.get("/schedule", scheduleController.getAllSchedule);

router.post("/timeinschedule", scheduleController.timeInSchedule);
router.post("/timeinattendance", scheduleController.timeInAttendance);

module.exports = router;
