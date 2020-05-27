const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user.model");

// router.get("/api/homepage", (req, res) => {
// 	User.find()
// 		.then(users => res.json(users))
// 		.catch(err => res.status(400).json("Error: " + err));
// });

router.post("/signup", (req, res) => {
	User.register(
		new User({ username: req.body.username }),
		req.body.password,
		function (err, user) {
			if (err) {
				return res.status(400).json({ error: err });
			} else {
				passport.authenticate("local")(req, res, function () {
					res.json(user);
				});
			}
		}
	);
});

router.post("/login", passport.authenticate("local"), (req, res) => {
	return res.json(req.user);
});

module.exports = router;
