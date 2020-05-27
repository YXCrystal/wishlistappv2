const passport = require("passport");
const LocalStrategy = require("passport-local");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const cors = require("cors");
const app = express();

const User = require("./models/user.model");
const userRouter = require("./routes/users");
const listingRouter = require("./routes/listings");
const indexRouter = require("./routes/index");

mongoose.connect("mongodb://localhost/wishlistapp", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(
	require("express-session")({
		secret: "Wishlist",
		resave: false,
		saveUninitialized: false,
	})
);

app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Flash middleware
app.use(function (req, res, next) {
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

// Authentication

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.use("/api", indexRouter);
app.use("/api/user", userRouter);
app.use("/api/listing", listingRouter);

app.listen(5000, () => {
	console.log("Server has started");
});
