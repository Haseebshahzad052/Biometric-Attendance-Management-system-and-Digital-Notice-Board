// routes.js

const express = require("express");
const router = express.Router();
const devicesController = require("../controllers/devicesController");

router.post("/biometric1", devicesController.getBiometricData);
router.post("/adddevice", devicesController.addDevice);
router.delete("/devicesetupdelete/:id", devicesController.deleteDeviceSetup);
router.get("/devicesetup", devicesController.getDeviceSetup);

module.exports = router;
