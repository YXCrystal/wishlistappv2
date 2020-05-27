var express = require("express");
var router = express.Router();
var User = require("../models/user.model");

router.post("/wishlist", (req, res) => {
	res.json(req.body);
});

module.exports = router;
