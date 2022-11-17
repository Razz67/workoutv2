import Video from "../assets/kettlebell.mp4";
import "../components/styles/media.css";

const SignupBackground = () => {
	return (
		<div>
			<video
				playsInline="playsinline"
				autoPlay="autoplay"
				muted="muted"
				loop="loop"
			>
				<source src={Video} type="video/mp4" />
			</video>
		</div>
	);
};

export default SignupBackground;
