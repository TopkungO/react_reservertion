const express = require("express");
const { createProfile } = require("../controllers/profile");
const { authCheck } = require("../middlewares/auth");
const router = express.Router();

// @ENDPOING http:localhost:5000/api/profile

router.post("/profile",authCheck, createProfile);



module.exports = router;
