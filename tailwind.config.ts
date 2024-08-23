import type { Config } from 'tailwindcss';
import theme from './src/styles/theme';

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	plugins: [theme, require('tailwindcss-animate')],
};
export default config;
