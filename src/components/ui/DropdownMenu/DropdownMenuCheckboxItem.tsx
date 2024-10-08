import { cn } from '@/lib/utils';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { MdCheckCircleOutline } from '@/../public';
import React from 'react';

const DropdownMenuCheckboxItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
	<DropdownMenuPrimitive.CheckboxItem
		ref={ref}
		className={cn(
			'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			className,
		)}
		checked={checked}
		{...props}
	>
		<span className='absolute left-2 flex size-3.5 items-center justify-center rounded-sm border border-black'>
			<DropdownMenuPrimitive.ItemIndicator>
				<MdCheckCircleOutline className='size-4' />
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
	DropdownMenuPrimitive.CheckboxItem.displayName;

export default DropdownMenuCheckboxItem;
