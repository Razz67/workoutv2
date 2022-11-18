import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Card } from "react-bootstrap";
import "./styles/workoutForm.css";
import { useAuthContext } from "../hooks/useAuthContext";

export const WorkoutDetails = ({ workout }) => {
	const { dispatch } = useWorkoutsContext();
	const { user } = useAuthContext();

	const handleClick = async () => {
		if (!user) {
			return;
		}
		const response = await fetch(
			"/api/workouts?/" + workout._id,
			{
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			}
		);
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: "DELETE_WORKOUT", payload: json });
		}
	};

	return (
		<>
			<div 
			className="workout-details">
				<Card>
					<Card.Body>
						<Card.Title>
							<h4>{workout.title}</h4>
						</Card.Title>
						<Card.Title>
							<strong>Load: </strong>
							{workout.load}(lbs)
						</Card.Title>
						<Card.Title>
							<strong>Reps: </strong>
							{workout.reps}
						</Card.Title>
						<Card.Title>
							<strong>Sets: </strong>
							{workout.sets}
						</Card.Title>

						<p>
							{formatDistanceToNow(new Date(workout.createdAt), {
								addSuffix: true,
							})}
						</p>
						<span
							className="material-symbols-outlined trash"
							onClick={handleClick}
						>
							delete
						</span>
					</Card.Body>
				</Card>
			</div>
		</>
	);
};
