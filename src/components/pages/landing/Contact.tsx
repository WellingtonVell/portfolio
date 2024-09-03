import { BsGithub, BsLinkedin, SiGmail } from '@/../public';
import { Button } from '@/components/ui/Button';
// biome-ignore format: Single line import
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

const Contact = () => {
	return (
		<section className='w-full py-12 px-4'>
			<Card className='max-w-6xl mx-auto bg-transparent border-none shadow-none'>
				<CardHeader>
					<CardTitle className='text-3xl font-bold text-center'>
						Contact Me
					</CardTitle>
					<CardDescription className='text-center text-lg'>
						Get in touch for collaborations
					</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
					{socials.map(social => (
						<Button
							variant='outline'
							className={`w-full sm:w-auto flex items-center justify-center space-x-2 ${social.className}`}
							asChild
							key={social.name}
						>
							<Link
								href={social.href}
								target='_blank'
								rel='noopener noreferrer'
								aria-label={social.arialabel}
							>
								<social.icon size={20} />
								<span>{social.name}</span>
							</Link>
						</Button>
					))}
				</CardContent>
			</Card>
		</section>
	);
};

export default Contact;

const socials = [
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/wellington-costavell',
		icon: BsLinkedin,
		arialabel: 'Visit my LinkedIn profile',
		className: 'hover:bg-[#0077B5]',
	},
	{
		name: 'GitHub',
		href: 'https://github.com/WellingtonVell',
		icon: BsGithub,
		arialabel: 'Visit my GitHub profile',
		className: 'hover:bg-[#333] hover:text-[#fff]',
	},
	{
		name: 'Email',
		href: 'mailto:wellingtonvell@gmail.com',
		icon: SiGmail,
		arialabel: 'Send me an email',
		className: 'hover:bg-primary',
	},
];
