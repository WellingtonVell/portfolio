import { PiStarFourFill } from '@/../public/icons';

const Tape = () => {
	return (
		<div className='relative -mx-5 md:-mx-20 p-6 my-20'>
			<div className='absolute inset-0 overflow-x-clip'>
				<div className='bg-gradient-to-r from-primary to-chart2 overflow-x-clip py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] px-10 -rotate-3'>
					<ul className='grid grid-flow-col gap-5 items-center motion-safe:animate-tape motion-safe:[animation-duration:15s]'>
						{[...words, ...words, ...words, ...words].map((word, index) => (
							<h5
								key={`${word + index}`}
								className='inline-flex gap-5 items-center uppercase text-nowrap'
							>
								{word}
								<PiStarFourFill className='-rotate-12 size-4' />
							</h5>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Tape;

const words = [
	'Performant',
	'Accessible',
	'Secure',
	'Interactive',
	'Scalable',
	'User Friendly',
	'Maintainable',
	'Search Optimized',
	'Usable',
	'Reliable',
];
