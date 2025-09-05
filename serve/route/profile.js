const express = require("express");
const { createProfile } = require("../controllers/profile");
const router = express.Router();

// @ENDPOING http:localhost:5000/api/profile

router.post("/profile", createProfile);



module.exports = router;
