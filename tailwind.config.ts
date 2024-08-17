import theme from '@/styles/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	plugins: [theme],
};
export default config;
