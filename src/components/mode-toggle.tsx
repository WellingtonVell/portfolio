'use client';

import { useTheme } from 'next-themes';
import { BiMoon, BiSun } from 'react-icons/bi';
import { Button } from './ui/Button';
// biome-ignore format: Single line import
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from './ui/DropdownMenu';

export function ModeToggle() {
	const { setTheme, themes, theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className={`${theme === 'light' ? 'border-0 bg-transparent' : ''}`}
				>
					<BiSun className='size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<BiMoon className='absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{themes.map(theme => (
					<DropdownMenuItem
						key={theme}
						onClick={() => setTheme(theme)}
						className='hover:bg-muted cursor-pointer'
					>
						{theme}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
