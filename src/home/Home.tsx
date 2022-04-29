/** @jsxImportSource theme-ui */

import React from "react";

// Components
import {
	Box,
	Container,
	Flex,
	Grid,
	IconButton,
	Link,
	ThemeProvider,
} from "theme-ui";
import Navbar from "../common/Navbar";
import { theme } from "../common/Theme";
import Footer from "../common/Footer";

// Icons
import { Link as ScrollLink } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Home = (props: any) => {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<Banner />
			<Grid id="scroll-to" columns={1} gap={200} sx={{ py: 40 }}>
				<RecentProjects />
				<GetInTouch />
			</Grid>
			<Footer />
		</ThemeProvider>
	);
};

const Banner = (props: any) => {
	const Line = (props: { width: string }) => {
		const strokeColor: string = "#00B8A5";
		return (
			<svg
				sx={{ ml: -170 }}
				viewBox="0 0 720 2"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line
					x1="0"
					y1="0"
					x2={props.width}
					y2="0"
					stroke={strokeColor}
					stroke-width="2px"
				/>
			</svg>
		);
	};

	return (
		<div>
			<Container sx={{ bg: "dark", m: 0, py: 120, px: 120 }}>
				<Container sx={{ my: "auto" }}>
					<h1
						sx={{ color: "light", fontSize: 56, fontFamily: "heading", my: 0 }}
					>
						Hi, I'm Connor
					</h1>
					<Line width="50%" />
					<p
						sx={{
							color: "light",
							fontSize: 16,
							fontFamily: "body",
							maxWidth: "50%",
							ml: "2rem",
							my: 2,
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. A bibendum
						velit, id venenatis odio gravida scelerisque sit eget.
					</p>
				</Container>
			</Container>
			<Container sx={{ bg: "dark", p: 20 }}>
				<ScrollLink to="scroll-to" spy={true} smooth={true}>
					<IconButton sx={{ width: "100%" }}>
						<HiArrowDown
							sx={{
								variant: "styles.bannerArrow",
								color: "light",
								width: "2rem",
								height: "auto",
							}}
						/>
					</IconButton>
				</ScrollLink>
			</Container>
		</div>
	);
};

const RecentProjects = (props: any) => {
	return (
		<Container sx={{ width: "70%" }}>
			<Grid columns={1} gap={0} sx={{ gridAutoRows: "1fr" }}>
				<Box
					sx={{
						variant: "styles.recentProjects.box",
						bg: "accentDark",
						w: "100%",
					}}
				>
					<h2 sx={{ variant: "styles.recentProjects.h2" }}>First project</h2>
					<p sx={{ variant: "styles.recentProjects.p" }}>aaaa</p>
				</Box>
				<Grid columns={2} gap={0} sx={{ width: "100%" }}>
					<Box
						sx={{
							variant: "styles.recentProjects.box",
							bg: "dark",
							color: "light",
						}}
					>
						<h2 sx={{ variant: "styles.recentProjects.h2" }}>Second project</h2>
						<p sx={{ variant: "styles.recentProjects.p" }}>aaaa</p>
					</Box>
					<Box
						sx={{
							variant: "styles.recentProjects.box",
							bg: "accentLight",
							color: "light",
						}}
					>
						<h2 sx={{ variant: "styles.recentProjects.h2" }}>Third project</h2>
						<p sx={{ variant: "styles.recentProjects.p" }}>aaaa</p>{" "}
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

const GetInTouch = (props: any) => {
	return (
		<Container sx={{ width: "70%" }}>
			<Flex sx={{ bg: "accentDark" }}>
				<Flex
					sx={{
						p: 20,
						flex: "1 1 auto",
						color: "light",
						fontFamily: "heading",
						width: "55%",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<h1 sx={{ fontSize: 28, pb: 50 }}>Get in touch.</h1>
					<Box>
						<h2 sx={{ fontSize: 24, textAlign: "right" }}>
							Or learn more about me first.
						</h2>
						<Link
							href="/about"
							sx={{
								variant: "styles.getInTouch.link",
								textDecoration: "none",
							}}
						>
							<h2 sx={{ fontSize: 24, textAlign: "right" }}>{"About >"}</h2>
						</Link>
					</Box>
				</Flex>
				<Flex
					sx={{
						p: 20,
						py: 50,
						flex: "1 1 auto",
						bg: "light",
						color: "dark",
						border: "solid 0.5rem",
						borderColor: "accentDark",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<ContactLink
						text="csharrington@berkeley.edu"
						href=""
						color="dark"
						icon={
							<AiFillMail
								sx={{ color: "dark", width: "1.5rem", height: "auto", m: 2 }}
							/>
						}
					/>
					<ContactLink
						text="LinkedIn"
						href=""
						color="accentDark"
						icon={
							<AiFillLinkedin
								sx={{
									color: "accentDark",
									width: "1.5rem",
									height: "auto",
									m: 2,
								}}
							/>
						}
					/>
					<ContactLink
						text="GitHub"
						href=""
						color="accentLight"
						icon={
							<AiFillGithub
								sx={{
									color: "accentLight",
									width: "1.5rem",
									height: "auto",
									m: 2,
								}}
							/>
						}
					/>
				</Flex>
			</Flex>
		</Container>
	);
};

const ContactLink = (props: {
	text: string;
	href: string;
	color: string;
	icon: any;
}) => {
	return (
		<Link href={props.href} sx={{ variant: "styles.getInTouch.contactLink" }}>
			<Flex sx={{ alignItems: "center", width: "fit-content" }}>
				{props.icon}
				{props.text}
			</Flex>
		</Link>
	);
};

export default Home;
