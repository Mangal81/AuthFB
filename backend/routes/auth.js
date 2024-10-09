const express = require("express");
const { singUp } = require("../controller/Auth");
const router = express.Router();

router.post("/signup", singUp);

module.exports = router;
