import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import { WorkoutDetails } from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import "../components/styles/home.css";
import HomeBackground from "../components/HomeBackground";

const Home = () => {
	const { workouts, dispatch } = useWorkoutsContext();
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("/api/workouts?", {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});

			const json = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_WORKOUTS", payload: json });
			}
		};

		// If there is a user, fetch workouts
		if (user) {
			fetchWorkouts();
		}
	}, [dispatch, user]);

	return (
		<>
			<header className="heading" style={{ textAlign: "center" }}>
				<h1>Welcome to Work It Out</h1>
				<p>
					Get{" "}
					<span id="pumped">
						<strong>pumped</strong>
					</span>{" "}
					and jam while your doing it
				</p>
			</header>
			<div className="home-video-holder">
				<div className="home-video-overlay">
					<div className="home-video-content container h-100">
						<HomeBackground />
					</div>
				</div>
				<div className="home">
					<div className="workouts">
						{workouts &&
							workouts.map((workout) => (
								<WorkoutDetails workout={workout} key={workout._id} />
							))}
					</div>

					<WorkoutForm />
				</div>
			</div>
		</>
	);
};

export default Home;
