import Technologies from '@/components/Technologies';
import { ModeToggle } from '@/components/mode-toggle';

export default function Home() {
	return (
		<main className='grid h-svh grid-rows-[auto_1fr_auto]'>
			<div>
				<nav className='border-border border-2 p-2 my-2 w-full rounded-xl'>
					<ModeToggle />
				</nav>
			</div>
			<section className='grid grid-flow-row size-full items-center'>
				<Technologies />
			</section>
			<footer className='border-t-2 border-[#f12] p-5' />
		</main>
	);
}
