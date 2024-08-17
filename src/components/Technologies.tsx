import { BiLogoPostgresql } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { DiMysql } from 'react-icons/di';
import { FaDocker, FaFigma, FaNodeJs, FaReact } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
// biome-ignore format: Single line import
import { SiExpress, SiJavascript, SiMongodb, SiNestjs, SiNextdotjs, SiPrisma, SiTypescript } from 'react-icons/si';
import { Card, CardDescription } from './ui/Card';

export default function Technologies() {
	return (
		<div className='w-auto overflow-hidden border-y-2 rounded-lg py-4 my-2 [mask-image:radial-gradient(circle,#000_1%,transparent_100%)]'>
			<ul className='grid grid-flow-col gap-10 w-fit animate-marquee'>
				{[...technologies, ...technologies].map(technology => (
					<Card
						className='grid grid-flow-row border-0 place-items-center gap-1 shadow-none'
						key={technology.title}
					>
						<technology.Icon
							className={`size-12 xl:size-20 3xl:size-44 ${getIconColor(technology.title)}`}
						/>
						<CardDescription className='pointer-events-none'>
							{technology.title}
						</CardDescription>
					</Card>
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
		default:
			return 'text-foreground';
	}
};
