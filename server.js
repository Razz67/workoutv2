require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutRoutes");
const userRoutes = require("./routes/userRoute");
const cors = require('cors')

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes
app.use("/api/workouts?", workoutRoutes);
app.use("/api/user?", userRoutes);

// connect to db
mongoose
	.connect(process.env.MONGO_DB)
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT, () => {
			console.log("connected to db & listening on port", process.env.PORT);
		});
	})
	.catch((error) => {
		console.log(error);
	});
