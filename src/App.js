// CSS: frontend
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// Pages && Components
import Home from "./pages/Home";
import MyNavbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MusicHome from "./screens/home/index";

function App() {
	const { user } = useAuthContext();

	return (
		<div className="App">
			<Router>
				<MyNavbar />
				<div className="pages">
					<Routes>
						{/* user is logged in navigate to home if not go to login */}
						<Route
							path="/"
							element={user ? <Home /> : <Navigate to="/login" />}
						/>

						{/* if user is not logged in navigate to login */}
						<Route
							path="/login"
							element={!user ? <Login /> : <Navigate to="/" />}
						/>

						{/* if user is not logged in navigate to signup */}
						<Route
							path="/signup"
							element={!user ? <Signup /> : <Navigate to="/" />}
						/>

						{/* if user is logged in make music accessible if not go to login */}
						<Route
							path="/music/*"
							element={user ? <MusicHome /> : <Navigate to="/login" />}
						/>
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
