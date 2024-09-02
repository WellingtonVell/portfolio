'use client';

import { BiMoon, CgSun } from '@/../public/icons';
import { Button } from '@/components/ui/Button';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export const SwitchTheme = () => {
	const { setTheme, theme } = useTheme();

	return (
		<div className='relative h-8 w-16 rounded-full'>
			{theme === 'light' ? (
				<Image
					src='/switch-light.png'
					alt='Dark'
					fill
					priority
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			) : (
				<Image
					src='/switch-dark.png'
					alt='Light'
					fill
					priority
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			)}
			<Button
				size='icon'
				variant='ghost'
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
				className={`absolute inset-y-[.15rem] flex size-7 items-center justify-center rounded-full bg-white/45 shadow-md transition-all duration-300 ${
					theme === 'light'
						? 'translate-x-[3.5rem] text-info'
						: 'translate-x-[.1rem] text-warning'
				}`}
			>
				{theme === 'light' ? (
					<BiMoon className='size-4' />
				) : (
					<CgSun className='size-4' />
				)}
				<span className='sr-only'>Toggle theme</span>
			</Button>
		</div>
	);
};

export default SwitchTheme;
