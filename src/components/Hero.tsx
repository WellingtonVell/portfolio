import hero from '@/../public/hero-computer.png';
import Image from 'next/image';
import { BiArrowToBottom, BiPhoneCall } from 'react-icons/bi';
import AnimatedBgHero from './AnimatedBgHero';
import { Button } from './ui/Button';

export default function Hero() {
	return (
		<div className='grid py-32 grid-flow-row place-items-center gap-8 z-0'>
			<div className='z-0'>
				<AnimatedBgHero />
				<div className='grid grid-flow-row place-items-center z-0'>
					<Image
						src={hero}
						alt='Hero'
						priority
						quality={100}
						className='size-28'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>

					<div className='grid grid-flow-col grid-cols-[auto_1fr] items-center gap-2 bg-muted p-2 rounded-xl'>
						<span className='bg-success size-2.5 rounded-full animate-pulse' />
						<p className='pointer-events-none'>Available for new projects</p>
					</div>
				</div>

				<div className='max-w-2xl grid grid-flow-row place-items-center gap-5 mt-5'>
					<h1 className='text-center pointer-events-none'>
						Building Exceptional User Experiences
					</h1>
					<p className='text-center pointer-events-none'>
						I specialize in transforming designs into functional, high
						performing web applications. Let`s discuss your next project.
					</p>

					<div className='space-x-2 z-0'>
						<Button variant='outline' className='gap-2'>
							Explore my work <BiArrowToBottom className='size-4' />
						</Button>
						<Button className='gap-2'>
							Contact me <BiPhoneCall className='size-4' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
