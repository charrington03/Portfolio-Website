/** @jsxImportSource theme-ui */

import type { Theme } from "theme-ui";
import { base } from "@theme-ui/presets";

export const theme: Theme = {
	...base,
	fonts: {
		body: "'Open Sans', sans-serif",
		heading: "'Montserrat Alternates', serif",
		monospace: "monospace",
	},
	colors: {
		dark: "#001219",
		light: "#FFFEFC",
		accentDark: "#007065",
		accentLight: "#00B8A5",
	},

	styles: {
		navbar: {
			dark: {
				bg: "dark",
				color: "light",
			},
			light: {
				bg: "light",
				color: "dark",
			},
		},
		navlink: {
			dark: {
				fontFamily: "heading",
				textDecoration: "none",
				":visited": {
					color: "light",
				},
				":hover": {
					color: "accentLight",
				},
			},
			light: {
				fontFamily: "heading",
				textDecoration: "none",
				":hover": {
					color: "accentDark",
				},
				"::visited": {
					color: "dark",
				},
			},
		},

		recentProjects: {
			box: {
				px: 32,
				py: 64,
			},
			h2: {
				color: "light",
				textAlign: "center",
				fontFamily: "heading",
				fontSize: "24",
			},
			p: {
				color: "light",
				textAlign: "center",
				fontFamily: "body",
				fontSize: "12",
			},
		},

		getInTouch: {
			link: {
				":visited": {
					color: "light",
				},
				":hover": {
					color: "accentLight",
				},
			},
			contactLink: {
				fontFamily: "body",
				fontSize: 20,
				color: "dark",
				textDecoration: "none",
				":visited": {
					color: "dark",
				},
				":hover": {
					color: "accentDark",
				},
			},
		},

		bannerArrow: {
			":hover": {
				color: "accentLight",
				cursor: "pointer",
			},
		},
	},
};
