const express = require("express");
const router = express.Router();

router.use("/data", require("./allCaptian"));
router.use("/captian", require("./bookCaptian"));

module.exports = router;
