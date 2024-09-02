import grain from '@/../public/grain.jpg';
import { BsCircleFill, HiSparkles, PiStarFourFill } from '@/../public/icons';
import Orbit from './Orbit';

const AnimatedBgHero = () => {
	return (
		<div
			className='inset-0 absolute mask-gradient -z-50'
			style={{ pointerEvents: 'none', userSelect: 'none' }}
		>
			<span
				className='absolute inset-0 opacity-[5%]'
				style={{ backgroundImage: `url(${grain.src})` }}
			/>

			<div className='absolute inset-0 overflow-x-clip'>
				<span className='size-[620px] opacity-15 dark:opacity-5 hero-ring' />
				<span className='size-[820px] opacity-10 dark:opacity-[0.04] hero-ring' />
				<span className='size-[1020px] opacity-5 dark:opacity-[0.03] hero-ring' />
				<span className='size-[1220px] opacity-5 dark:opacity-[0.02] hero-ring' />
			</div>

			<div className='absolute inset-0 overflow-x-clip'>
				{[...orbitItems].map(item => (
					<Orbit
						key={`orbit-${item.position}+${item.icon}`}
						size={item.size}
						position={item.position}
						rotation={item.rotation}
					>
						<item.icon className={item.className} />
					</Orbit>
				))}
			</div>
		</div>
	);
};

export default AnimatedBgHero;

type OrbitItem = {
	size: number;
	position: number;
	rotation: number;
	icon: React.ElementType;
	className: string;
};

const orbitItems: OrbitItem[] = [
	{
		size: 800,
		position: -72,
		icon: PiStarFourFill,
		rotation: 300,
		className:
			'text-[#1e40af] motion-safe:animate-orbit-pulse motion-safe:[animation-duration:70s] size-12',
	},
	{
		size: 550,
		position: 20,
		icon: PiStarFourFill,
		className:
			'text-[#1e40af] size-12 motion-safe:animate-orbit-pulse motion-safe:[animation-duration:50s] motion-safe:[animation-delay:6s]',
		rotation: 250,
	},
	{
		size: 590,
		position: 98,
		icon: PiStarFourFill,
		className:
			'text-[#1e40af] size-12 motion-safe:animate-orbit-pulse motion-safe:[animation-duration:50s] motion-safe:[animation-delay:8s]',
		rotation: 160,
	},
	{
		size: 430,
		position: -14,
		icon: HiSparkles,
		className:
			'text-[#1e40af] size-12 motion-safe:animate-orbit-pulse motion-safe:[animation-duration:60s] -z-10',
		rotation: 120,
	},
	{
		size: 440,
		position: 79,
		icon: HiSparkles,
		className:
			'text-[#1e40af] size-5 motion-safe:animate-orbit-pulse motion-safe:[animation-duration:70s]',
		rotation: 140,
	},
	{
		size: 530,
		position: 178,
		icon: HiSparkles,
		className:
			'text-[#1e40af] size-10 motion-safe:animate-orbit-pulse motion-safe:[animation-duration:60s]',
		rotation: 170,
	},
	{
		size: 710,
		position: 144,
		icon: HiSparkles,
		className:
			'text-[#1e40af] size-14 motion-safe:animate-orbit-pulse motion-safe:[animation-duration:80s]',
		rotation: 200,
	},
	{
		size: 720,
		position: 85,
		icon: BsCircleFill,
		className:
			'text-[#1e40af] size-3 motion-safe:animate-pulse motion-safe:[animation-duration:15s]',
		rotation: 120,
	},
	{
		size: 520,
		position: -41,
		icon: BsCircleFill,
		className:
			'text-[#1e40af] size-2 motion-safe:animate-pulse motion-safe:[animation-duration:15s] motion-safe:[animation-delay:3s]',
		rotation: 160,
	},
	{
		size: 650,
		position: -5,
		icon: BsCircleFill,
		className:
			'text-[#1e40af] size-2 motion-safe:animate-pulse motion-safe:[animation-duration:15s] motion-safe:[animation-delay:5s]',
		rotation: 90,
	},
];
