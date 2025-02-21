import React from "react";

import Navbar from "./Navbar";
import Container from "./Container";
import Banner from "./Banner";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="p-0 m-0">
			<Navbar />
			<Container />
			<Footer />
		</div>
	);
};

export default Home;