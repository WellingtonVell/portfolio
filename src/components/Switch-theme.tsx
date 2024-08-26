'use client';

import { Button } from '@/components/ui/Button';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { BiMoon } from 'react-icons/bi';
import { CgSun } from 'react-icons/cg';

export function SwitchTheme() {
	const { setTheme, theme } = useTheme();

	return (
		<div className='relative h-10 w-20 rounded-full'>
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
				className={`absolute inset-y-1.5 flex size-7 items-center justify-center rounded-full bg-white/45 shadow-md transition-all duration-300 ${
					theme === 'light'
						? 'translate-x-11 text-blue-900'
						: 'translate-x-1 text-yellow-400'
				}`}
			>
				{theme === 'light' ? (
					<BiMoon className='size-5' />
				) : (
					<CgSun className='size-5' />
				)}
				<span className='sr-only'>Toggle theme</span>
			</Button>
		</div>
	);
}
