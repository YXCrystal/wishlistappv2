var express = require("express");
var router = express.Router();
var User = require("../models/user.model");
var Listing = require("../models/listing.model");

router.get("/wishlist/:username", (req, res) => {
	User.findOne({ username: req.params.username })
		.populate("wishlist")
		.exec(function (err, user) {
			if (err) {
				return res.status(400).json({ error: err });
			}
			return res.json(user);
		});
});

router.post("/wishlist/:id", (req, res) => {
	Listing.create(req.body, function (err, listing) {
		if (err) {
			return res.status(400).json({ error: err });
		}

		User.findById(req.params.id, function (err, user) {
			if (err) {
				return res.status(400).json({ error: err });
			}

			user.wishlist.push(listing);
			user.save(function (err, saveUser) {
				if (err) {
					return res.status(400).json({ error: err });
				}

				res.json(listing);
			});
		});
	});
});

router.delete("/wishlist/:id/listing/:listing_id", (req, res) => {
	Listing.findOneAndDelete({ listing_id: req.params.listing_id }, function (
		err,
		listing
	) {
		if (err) {
			return res.status(400).json({ error: err });
		}

		res.json(listing);
	});
});

module.exports = router;
