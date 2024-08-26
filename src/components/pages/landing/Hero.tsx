import hero from '@/../public/hero-computer.png';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { BiArrowToBottom, BiPhoneCall } from 'react-icons/bi';
import { AnimatedBgHero } from '.';

export default function Hero() {
	return (
		<section className='min-h-screen'>
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

						<div className='grid grid-flow-col grid-cols-[auto_1fr] items-center gap-2 bg-muted p-2 rounded-xl pointer-events-none'>
							<span className='bg-success size-2.5 rounded-full motion-safe:animate-pulse' />
							<p>Available for new projects</p>
						</div>
					</div>

					<div className='max-w-2xl grid grid-flow-row place-items-center gap-5 mt-5'>
						<h1 className='text-center'>
							Building Exceptional User Experiences
						</h1>
						<p className='text-center'>
							I specialize in transforming designs into functional, high
							performing web applications. Let`s discuss your next project.
						</p>

						<div className='grid grid-flow-col gap-2 lg:gap-10'>
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
		</section>
	);
}
