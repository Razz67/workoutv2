import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import "../components/styles/navbar.css";

const MyNavbar = () => {
	const { logout } = useLogout();
	const { user } = useAuthContext();

	const handleClick = () => {
		logout();
	};

	return (
		<Navbar className="nav"  expand="md">
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<h1 className="brand">Work It Out</h1>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Nav className="me-auto"></Nav>
					<Nav className="me-auto"></Nav>
					<Nav className="me-auto"></Nav>
					<Nav className="me-auto">
						{!user && (
							<div>
								<Nav className="navbar-right bg-faded">
									<Link to="/login" className="nav-link">
										Login
									</Link>
									<Link to="signup" className="nav-link">
										Sign Up
									</Link>
								</Nav>
							</div>
						)}
						{user && (
							<>
								<Link to="/music" className="nav-link">
									<h3>Muzik</h3>
								</Link>

								<div className="flex">
									<button
										className="nav-link btn btn-danger"
										onClick={handleClick}
									>
										Log Out
									</button>
									<span id="email">Logged in as: {user.email}</span>
								</div>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MyNavbar;
