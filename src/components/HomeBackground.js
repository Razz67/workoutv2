import Video from "../assets/rope.mp4";
import "./styles/media.css";

const HomeBackground = () => {
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

export default HomeBackground;
