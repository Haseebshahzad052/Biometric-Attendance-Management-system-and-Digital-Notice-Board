const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

router.get("/report", reportController.getReports);
router.delete("/reportdelete/:id", reportController.deleteReport);
router.get("/attendance", reportController.getAttendance);

module.exports = router;
