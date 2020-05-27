var express = require("express");
var router = express.Router();
var Listing = require("../models/listing.model");

router.get("/", (req, res) => {
	res.send("You've reached the listings route");
});

module.exports = router;
