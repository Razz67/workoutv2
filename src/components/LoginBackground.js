import Video from "../assets/woman-lifting.mp4";
import "../components/styles/home.css";

const LoginBackground = () => {
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

export default LoginBackground;
