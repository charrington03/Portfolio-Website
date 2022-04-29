/** @jsxImportSource theme-ui */

import { Link } from "react-router-dom";

const App = (props: any) => {
	return (
		<div>
			<h1>App.js</h1>
			<nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
				<Link to="/home">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/projects">Projects</Link>
			</nav>
		</div>
	);
};

export default App;
