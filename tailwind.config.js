const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["ui-sans-serif", ...fontFamily.sans],
				serif: ["ui-serif", ...fontFamily.serif],
				mono: ["ui-monospace", ...fontFamily.mono],
			},
		},
	},
	plugins: [],
};
