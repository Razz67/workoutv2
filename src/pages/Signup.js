// useSignup.js hook is used to handle this signup page.
import { useSignup } from "../hooks/useSignup";
import { useState } from "react";
import SignupBackground from "../components/SignupBackground";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isLoading, error, signup } = useSignup("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		await signup(email, password);
	};

	return (
		<div className="login-video-holder">
			<div className="login-video-overlay">
				<div className="login-video-content h-100">
					<SignupBackground />
				</div>
			</div>
			<form className="p-4 signup" onSubmit={handleSubmit}>
				<h3>Sign Up</h3>
				<div className="form-group">
					<label>Email address</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="email"
						autoComplete="username email"
						value={email}
						placeholder="email@example.com"
					/>
					<small id="emailHelp" className="form-text text-muted">
						We'll never share your email with anyone else.
					</small>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="password"
						value={password}
						autoComplete="username password"
						placeholder="Password"
					/>
				</div>

				<button disabled={isLoading} className="btn">
					Sign Up
				</button>
				{error && <div className="error alert alert-danger mt-3">{error}</div>}
			</form>
		</div>
	);
};

export default Signup;
