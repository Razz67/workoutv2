const express = require("express");

// Require the functions from the workoutController.js file
const {
	getAllWorkouts,
	getOneWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Require authorization for all routes
router.use(requireAuth);

// connect model data(workoutModel.js) to the routes
// Get all workouts
router.get("/", getAllWorkouts);

// Get one workout
router.get("/:id", getOneWorkout);

// POST a workout
router.post("/", createWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

module.exports = router;
