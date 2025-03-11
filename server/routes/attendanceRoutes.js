const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

router.delete("/attendancedelete/:id", attendanceController.deleteAttendance);
// Route for /api/timeout endpoint
router.post("/timeout", attendanceController.handleTimeout);
