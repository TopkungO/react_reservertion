const express = require("express");
const router = express.Router();
const {
  listCamping,
  readCamping,
  createCamping,
  updateCamping,
  deleteCamping,
} = require("../controllers/camping");
const { authCheck } = require("../middlewares/auth");


// @ENDPOING http:localhost:5000/api/camping/:id
//Methon GET [list camping]
//Access private
router.get("/camping/:id", listCamping);

//Methon GET [read camping]
//Access public
router.get("/camping", readCamping);

//Methon POST [create camping]
//Access public
router.post("/camping",authCheck, createCamping);

//@Methon put [edit camping]
//@Access Private
router.put("/camping/:id", updateCamping);

//@Methon delete [edit camping]
//@Access private
router.delete("/camping/:id", deleteCamping);

module.exports = router;
