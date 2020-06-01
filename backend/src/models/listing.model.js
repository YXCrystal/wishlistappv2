const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
	listing_id: String,
	title: String,
	description: String,
	image: String,
	price: String,
	currency_code: String,
	url: String,
});

module.exports = mongoose.model("Listing", listingSchema);
