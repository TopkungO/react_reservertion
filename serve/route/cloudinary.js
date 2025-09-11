const express = require("express");
const router = express.Router();

const { authCheck } = require("../middlewares/auth");
const { createImage } = require("../controllers/cloudinary");

// @ENDPOING http:localhost:5000/api/images

router.post("/images", authCheck, createImage);

module.exports = router;
