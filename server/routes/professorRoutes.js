const express = require("express");
const router = express.Router();
const professorController = require("../controllers/professorController");

router.post("/createProfessor", professorController.createProfessor);
router.get("/professors", professorController.getAllProfessors);
router.put("/professors/:id", professorController.updateProfessor);
router.delete("/professors/:id", professorController.deleteProfessor);

router.post("/registeradmin", professorController.registerAdmin);
router.post("/loginadmin", professorController.loginAdmin);
router.get("/logout", professorController.logout);
router.post("/dummy", professorController.dummy);
router.post("/dummyu", professorController.dummyu);
router.post("/timeinprofessor", professorController.timeinProfessor);

module.exports = router;
