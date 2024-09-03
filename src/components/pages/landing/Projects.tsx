// biome-ignore format: Single line import
import { FcMultipleSmartphones, GiLockedDoor, Grain, MdIntegrationInstructions, MdOutlineDeveloperMode, RxArrowTopLeft, Template } from '@/../public';
import { Button } from '@/components/ui/Button';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

const Projects = () => {
	return (
		<section className='min-h-screen'>
			<div className='grid grid-flow-row gap-5 pb-16 justify-items-center'>
				<div className='flex justify-center'>
					<h1 className='uppercase tracking-widest bg-gradient-to-r from-primary to-chart2 font-serif text-[#00000000] bg-clip-text text-center'>
						Real-world Results
					</h1>
				</div>

				<h2 className='font-serif'>Featured Projects</h2>
				<h5 className='text-center tracking-widest font-semibold text-foreground/60 max-w-xl'>
					See how i transform concepts into engaging digital experiences
				</h5>
				<div className='my-10 grid grid-flow-row gap-20 w-full justify-items-center'>
					{[...projects, ...projects].map((project, index) => (
						<div
							key={`${project.title}+${index}`}
							className={`bg-muted z-0 pt-4 px-8 rounded-2xl lg:px-20 lg:pt-16 lg:max-w-[1200px] after:content-[''] after:absolute after:inset-0 after:-z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:outline-foreground/20 after:rounded-2xl sticky`}
							style={{ top: `calc(8rem + ${index * 1}rem)` }}
						>
							<span
								className='absolute inset-0 opacity-5 -z-50'
								style={{ backgroundImage: `url(${Grain.src})` }}
							/>
							<div className='lg:grid lg:grid-cols-2 lg:gap-16'>
								<div className='lg:pb-16'>
									<div className='bg-gradient-to-r from-primary to bg-chart2 inline-flex font-bold tracking-widest text-sm text-[#00000000] bg-clip-text justify-between p-2 space-x-5 uppercase'>
										<span>{project.company}</span>
										<span>&bull;</span>
										<span>{project.year}</span>
									</div>
									<h1 className='font-serif'>{project.title}</h1>
									<hr className='my-2 text-foreground/20' />
									<ul className='my-2 grid grid-flow-row gap-4'>
										{project.results.map(result => (
											<li
												key={result.title}
												className='grid grid-flow-col place-items-start items-center justify-start gap-3.5 mx-1 text-foreground/60'
											>
												<result.icon className='size-4 lg:size-8' />{' '}
												{result.title}
											</li>
										))}
									</ul>
									<Link href={project.link} tabIndex={-1}>
										<Button className='gap-2 w-full md:w-fit rounded-xl z-10 my-4'>
											View Project
											<RxArrowTopLeft className='size-4 rotate-90' />
										</Button>
									</Link>
								</div>
								<div className='relative'>
									<Image
										src={project.image}
										alt={project.title}
										className='-mb-8 mx-auto md:-mb-0 lg:absolute lg:h-full lg:ml-auto -z-10 lg:w-auto lg:max-w-none'
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;

type Project = {
	year: number;
	title: string;
	company: string;
	results: {
		icon: React.ElementType;
		title: string;
	}[];
	link: string;
	image: StaticImageData;
};

const projects: Project[] = [
	{
		year: 2024,
		title: 'Full Stack Development',
		company: 'Linda Flor',
		results: [
			{
				icon: MdOutlineDeveloperMode,
				title:
					'Development of complete end-to-end functionalities, using modern technologies such as NestJS and NextJS',
			},
			{
				icon: MdIntegrationInstructions,
				title: 'Integration of RESTful APIs',
			},
			{
				icon: FcMultipleSmartphones,
				title:
					'Creating responsive and intuitive user interfaces in collaboration with UX/UI designers',
			},
			{
				icon: GiLockedDoor,
				title:
					'Implementation of secure authentication systems, including OAuth, JWT, and custom strategies.',
			},
		],
		link: 'https://github.com/WellingtonVell/',
		image: Template,
	},
];
