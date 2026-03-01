/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary-color)',
				secondary: 'var(--secondary-color)',
				tertiary: 'var(--tertiary-color)',
				quaternary: 'var(--quaternary-color)',
			},
			fontFamily: {
				sans: ['var(--primary-font)', 'sans-serif'],
				serif: ['var(--secondary-font)', 'serif'],
			},
		}
	}
} satisfies Config;

export default config;