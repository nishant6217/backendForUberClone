const express = require("express");

const router = express.Router();
const captian = require("../../controllers/captianController")

router.post("/get-all-captian", captian.getAllCaptian);

module.exports = router;
