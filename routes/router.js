const { model } = require("mongoose");
const {GeneratenewshortURl,redirecttoOriginalPage,Analytics} = require("../controllers/control");
const express = require("express");
const router = express.Router();

router.post("/",GeneratenewshortURl);

router.get("/:shortid",redirecttoOriginalPage)

router.get("/analytics/:shortid",Analytics)

module.exports = router;