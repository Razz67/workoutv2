const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


const requireAuth = async (req, res, next) => {
	// verify if the user is logged in
	const { authorization } = req.headers;

	if (!authorization) {
		return res.status(401).json({ error: "You must be logged in." });
	}

	// split the token from the header at position 1
	const token = authorization.split(" ")[1];

	// verify the token
	try {
		// get the user id from the payload
		const { _id } = jwt.verify(token, process.env.JWT_SECRET);

		// add the user id to the request...return just the id
		req.user = await User.findOne({ _id }).select("_id");

		// continue to the next handler function
		next();
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: "Unauthorized request." });
	}
};

module.exports = requireAuth;
