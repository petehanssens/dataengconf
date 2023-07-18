/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				openSans: ['Open+Sans'],
				montserrat: ['Montserrat'],
				roboto: ['Roboto']
			}
		},
	},
	plugins: [
		require("daisyui")
	],
}
