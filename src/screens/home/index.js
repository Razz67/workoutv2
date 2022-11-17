import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import "./home.css"
import Library from "../library";
import Feed from '../feed/feed'
import Trending from '../trending/trending'
import Player from '../player/player'
import Favorites from '../favorites/favorites'
import Login from "../Auth/login";
import { setClientToken } from "../../spotify"




export default function MusicHome() {
	const [token, setToken] = useState("");

useEffect(() => {
	const token = window.localStorage.getItem("token");
	const hash = window.location.hash;
	window.location.hash = "";
	
	if (!token && hash) {
		const _token = hash.split("&")[0].split("=")[1];
		window.localStorage.setItem("token", _token);
		setToken(_token);
		setClientToken(_token);
	} else {
		setToken(token);
		setClientToken(token);
	}
}, []);



	return !token ? (
			<Login /> 
			) : (
		<div className="main-body">
			<Sidebar />
			<Routes>
				<Route path="/" element={<Library />} />
				<Route path="/feed" element={<Feed />} />
				<Route path="/trending" element={<Trending />} />
				<Route path="/feed" element={<Player />} />
				<Route path="/feed" element={<Favorites />} />
			</Routes>
		</div>
	);
}
