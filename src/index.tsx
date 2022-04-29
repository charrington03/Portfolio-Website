/** @jsxImportSource theme-ui */

// Default imports
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Library imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Font imports
import "@fontsource/open-sans";
import "@fontsource/montserrat-alternates";

// Component imports
import Home from "./home/Home";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
