import { Contact, Hero, Projects, Tape } from '@/components/pages/landing';

export default function Home() {
	return (
		<main className='min-h-dvh px-5 md:px-20'>
			<Hero />
			<Projects />
			<Tape />
			<Contact />
		</main>
	);
}
