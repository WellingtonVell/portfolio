import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import { Button } from './ui/Button';

const Footer = () => {
	return (
		<footer className='px-5 md:px-20 bg-gradient-to-t from-primary/40 to-transparent to-60%'>
			<div className='border-t border-foreground/35 py-6 text-sm text-center flex flex-col space-y-5'>
				<div className='text-foreground/40 grid grid-flow-row'>
					<span>&copy; {new Date().getFullYear()}. All rights reserved.</span>
					<span>This project is licensed under the MIT License.</span>
				</div>

				<ul className='grid grid-flow-row place-items-center gap-4'>
					{links.map(link => (
						<li key={link.name} className='flex items-center'>
							<Button variant='link'>
								<Link href={link.href} className='text-sm font-semibold'>
									{link.name}
								</Link>
								<BsArrowLeft className='size-3 rotate-[135deg] text-foreground' />
							</Button>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;

const links = [
	{
		name: 'LinkedIn',
		href: 'www.linkedin.com/in/wellington-costavell',
	},
	{
		name: 'GitHub',
		href: 'https://github.com/WellingtonVell/',
	},
	{
		name: 'Email',
		href: 'mailto:wellingtonvell@gmail.com',
	},
];
