const express = require("express");
const router = express.Router();
const noticeboardController = require("../controllers/noticeboardrController");

router.post("/generatenotice", noticeboardController.generateNotice);
router.get("/noticeboard1", noticeboardController.getNoticeboard);

module.exports = router;
