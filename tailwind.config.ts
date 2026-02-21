/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--primary-font)', 'sans-serif'],
				serif: ['var(--secondary-font)', 'serif'],
			},
		}
	}
} satisfies Config;

export default config;