import type { PropsWithChildren } from 'react';

type OrbitProps = {
	size: number;
	rotation: number;
	position: number;
};

const Orbit = ({
	children,
	size,
	position,
	rotation,
}: PropsWithChildren<OrbitProps>) => {
	return (
		<div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
			<div
				className='animate-orbit'
				style={{ animationDuration: `${rotation}s` }}
			>
				<div
					className='flex items-start justify-start'
					style={{
						width: `${size}px`,
						height: `${size}px`,
						transform: `rotate(${position}deg)`,
					}}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Orbit;
