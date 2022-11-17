import { useState } from "react";
import LoginBackground from "../components/LoginBackground";
import { useLogin } from "../hooks/useLogin";
import "../components/styles/media.css";

const Login = () => {
	// set up the states for the form
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { login, error, isLoading } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<>
			<div className="login-video-holder">
				<div className="login-video-overlay">
					<div className="login-video-content h-100">
						<LoginBackground />
					</div>
				</div>
				<form onSubmit={handleSubmit} className="p-4 login">
					<h3>Login</h3>
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
					</div>

					<div className="form-group">
						<label>Password</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							className="form-control"
							id="password"
							autoComplete="username email"
							value={password}
							placeholder="Password"
						/>
					</div>

					<button disabled={isLoading} className="btn btn-primary">
						Login in
					</button>
					{error && <div className="error">{error}</div>}
				</form>
			</div>
		</>
	);
};

export default Login;
