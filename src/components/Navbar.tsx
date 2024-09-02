import { LiaFlagUsaSolid } from '@/../public/icons';
import { SwitchTheme } from '.';
import { Button } from './ui/Button';

export default function Navbar() {
	return (
		<nav className='grid grid-flow-col grid-cols-[auto_1fr_auto] items-center z-50 top-0 sticky justify-items-center px-5 bg-background/20 backdrop-blur-sm'>
			{/*TODO: Support portuguese and english */}
			<Button variant='ghost' size='icon' className='m-1'>
				<LiaFlagUsaSolid size={30} />
			</Button>
			<div className='grid gap-2 grid-flow-col items-center border-foreground/35 border px-2 my-2 py-1 w-fit rounded-full bg-muted shadow-lg shadow-muted backdrop-blur text-center'>
				{Links.map(link => (
					<a
						key={link.name}
						href={link.href}
						className='px-2 sm:px-4 py-1.5 rounded-full transition duration-300 hover:bg-foreground/25'
					>
						{link.name}
					</a>
				))}
			</div>
			<SwitchTheme />
		</nav>
	);
}

const Links = [
	{ name: 'Home', href: '#' },
	{ name: 'Projects', href: '#' },
	{ name: 'About', href: '#' },
	{ name: 'Contact', href: '#' },
];
