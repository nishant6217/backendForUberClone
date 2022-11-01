const express = require("express");

const router = express.Router();
const captian = require("../../controllers/captianController")

router.post("/hire-captian", captian.hireCaptian);

module.exports = router;
