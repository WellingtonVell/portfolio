import { ThemeProvider } from '.';

const Providers = ({ children }: React.PropsWithChildren) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			themes={['light', 'dark']}
		>
			{children}
		</ThemeProvider>
	);
};

export default Providers;
