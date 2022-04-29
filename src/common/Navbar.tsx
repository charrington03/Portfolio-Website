/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Flex, Link } from "theme-ui";

function Navbar(props: any) {
	const navbarVariant: string = props.light
		? "styles.navbar.light"
		: "styles.navbar.dark";
	const navlinkVariant: string = props.light
		? "styles.navlink.light"
		: "styles.navlink.dark";

	return (
		<Flex sx={{ variant: navbarVariant, px: 32, py: 0 }}>
			<Box sx={{ flex: "1 1 auto", p: 2 }}>
				<Link href="/" sx={{ variant: navlinkVariant }}>
					<h1 sx={{ display: "inline-block", letterSpacing: "-8%" }}>CSH</h1>
				</Link>
			</Box>

			<div sx={{ mx: "auto", my: "auto" }}>
				<Link
					href="/projects"
					sx={{ variant: navlinkVariant, p: 2, fontSize: 20 }}
				>
					Projects
				</Link>
				<Link
					href="/contact"
					sx={{ variant: navlinkVariant, p: 2, fontSize: 20 }}
				>
					Contact
				</Link>
			</div>
		</Flex>
	);
}

export default Navbar;
