const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3,
	},
	password: String,
	wishlist: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Listing",
		},
	],
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
