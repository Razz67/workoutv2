import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import "./styles/workoutForm.css";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutForm = () => {
	const { dispatch } = useWorkoutsContext();

	const [title, setTitle] = useState("");
	const [load, setLoad] = useState("");
	const [reps, setReps] = useState("");
	const [sets, setSets] = useState("");
	const [error, setError] = useState(null);
	const [empty, setEmpty] = useState([]);
	const { user } = useAuthContext();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError("You must be logged in to create a workout");
			return;
		}

		const workout = { title, load, reps, sets };

		const response = await fetch("http://localhost:5000/api/workouts", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmpty(json.empty);
		}

		if (response.ok) {
			setEmpty([]);
			setError(null);
			setTitle("");
			setLoad("");
			setReps("");
			dispatch({ type: "CREATE_WORKOUT", payload: json });
		}
	};

	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>Create Your Workout</h3>

			<label>Exercise Title:</label>
			<input
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				className={empty.includes("title") ? "error" : ""}
			/>

			<label>Load (in lbs):</label>
			<input
				type="number"
				onChange={(e) => setLoad(e.target.value)}
				value={load}
				className={empty.includes("load") ? "error" : ""}
			/>

			<label>Number of Reps:</label>
			<input
				type="number"
				onChange={(e) => setReps(e.target.value)}
				value={reps}
				className={empty.includes("reps") ? "error" : ""}
			/>

			<label>Sets:</label>
			<input
				type="number"
				onChange={(e) => setSets(e.target.value)}
				value={sets}
				className={empty.includes("sets") ? "error" : ""}
			/>

			<button>Add Workout</button>
			{error && <div className="error">{error}</div>}
		</form>
	);
};

export default WorkoutForm;
