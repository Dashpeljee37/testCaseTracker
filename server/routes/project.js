const express = require("express");
const {
  getAllProjects,
  getProject,
  getFeatureAll,
} = require("../controller/project");

const router = express.Router();

router.route('/getAllProjects').get(getAllProjects)
router.route('/getProject').get(getProject)
router.route('/feature/getAll').get(getFeatureAll)
// router.get("/getAllProjects", (req, res) => {});

// router.get("/getProject", (req, res) => {});

// router.get("/feature/getAll", (req, res) => {});
module.exports = router;
