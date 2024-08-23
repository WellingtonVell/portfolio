import { Hero, Projects, Technologies } from '@/components/pages/landing';

export default function Home() {
	return (
		<main className='min-h-dvh px-20'>
			<Hero />
			<Projects />
			<Technologies />
		</main>
	);
}
