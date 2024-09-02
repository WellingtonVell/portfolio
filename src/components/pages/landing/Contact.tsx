import { Button } from '@/components/ui/Button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/Card';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

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
					<Button
						variant='outline'
						className='w-full sm:w-auto flex items-center justify-center space-x-2 hover:bg-primary transition-colors'
						asChild
					>
						<Link href='mailto:wellingtonvell@gmail.com' aria-label='Email me'>
							<SiGmail size={20} />
							<span>Email</span>
						</Link>
					</Button>
					<Button
						variant='outline'
						className='w-full sm:w-auto flex items-center justify-center space-x-2 hover:bg-[#0077B5] transition-colors'
						asChild
					>
						<Link
							href='https://www.linkedin.com/in/wellington-costavell'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit my LinkedIn profile'
						>
							<BsLinkedin size={20} />
							<span>LinkedIn</span>
						</Link>
					</Button>
					<Button
						variant='outline'
						className='w-full sm:w-auto flex items-center justify-center space-x-2 hover:bg-[#333] transition-colors hover:text-[#fff]'
						asChild
					>
						<Link
							href='https://github.com/WellingtonVell'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit my GitHub profile'
						>
							<BsGithub size={20} />
							<span>GitHub</span>
						</Link>
					</Button>
				</CardContent>
			</Card>
		</section>
	);
};

export default Contact;
