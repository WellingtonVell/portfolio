// biome-ignore format: Single line import
import { BiLogoHtml5, BiLogoPostgresql, BsGithub, DiMysql, FaDocker, FaFigma, FaGolang, FaNodeJs, FaReact, IoLogoCss3, RiTailwindCssFill, SiExpress, SiJavascript, SiMongodb, SiNestjs, SiNextdotjs, SiPrisma, SiTypescript } from '@/../public';

export default function Technologies({ reverse = false }) {
	return (
		<div className='w-auto overflow-hidden py-4 [mask-image:radial-gradient(circle,#000_1%,transparent_100%)]'>
			<ul
				className={`grid grid-flow-col gap-10 w-fit motion-reduce:animate-none hover:[animation-play-state:paused] ${reverse ? 'animate-technologies-reverse' : 'animate-technologies'}`}
			>
				{[
					...(reverse ? [...technologies].reverse() : technologies),
					...(reverse ? [...technologies].reverse() : technologies),
				].map((technology, index) => (
					<li
						className='grid grid-flow-row place-items-center gap-1 shadow-none bg-opacity-0'
						key={`${technology.title}+${index}`}
					>
						<technology.Icon
							className={`size-12 xl:size-20 3xl:size-44 ${getIconColor(technology.title)}`}
						/>
						<p className='pointer-events-none'>{technology.title}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

const technologies = [
	{ Icon: FaReact, title: 'React' },
	{ Icon: SiNextdotjs, title: 'Next.js' },
	{ Icon: SiNestjs, title: 'Nest.js' },
	{ Icon: SiJavascript, title: 'JavaScript' },
	{ Icon: SiTypescript, title: 'TypeScript' },
	{ Icon: RiTailwindCssFill, title: 'TailwindCSS' },
	{ Icon: FaNodeJs, title: 'Node.js' },
	{ Icon: SiExpress, title: 'Express.js' },
	{ Icon: SiMongodb, title: 'MongoDB' },
	{ Icon: BiLogoPostgresql, title: 'PostgreSQL' },
	{ Icon: DiMysql, title: 'MySQL' },
	{ Icon: BsGithub, title: 'Git' },
	{ Icon: FaDocker, title: 'Docker' },
	{ Icon: SiPrisma, title: 'Prisma' },
	{ Icon: FaFigma, title: 'Figma' },
	{ Icon: FaGolang, title: 'Golang' },
	{ Icon: BiLogoHtml5, title: 'HTML5' },
	{ Icon: IoLogoCss3, title: 'CSS3' },
];

const getIconColor = (title: string) => {
	switch (title) {
		case 'React':
			return 'text-[#61DAFB]';
		case 'Nest.js':
			return 'text-[#E0234E]';
		case 'JavaScript':
			return 'text-[#F7DF1E] rounded-md';
		case 'TypeScript':
			return 'text-[#3178C6]';
		case 'TailwindCSS':
			return 'text-[#06B6D4]';
		case 'Node.js':
			return 'text-[#339933]';
		case 'MongoDB':
			return 'text-[#47A248]';
		case 'PostgreSQL':
			return 'text-[#336791]';
		case 'MySQL':
			return 'text-[#4479A1]';
		case 'Docker':
			return 'text-[#2496ED]';
		case 'Figma':
			return 'text-[#F24E1E]';
		case 'Golang':
			return 'text-[#00ADD8]';
		case 'HTML5':
			return 'text-[#F24E1E]';
		case 'CSS3':
			return 'text-[#61DAFB]';
		default:
			return 'text-foreground';
	}
};
