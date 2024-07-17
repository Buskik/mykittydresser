import type { ComponentProps, ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface IconProps extends ComponentProps<"div"> {
	icon: ElementType;
}

export function Icon({ icon: Icon, className, ...props }: IconProps) {
	return (
		<div
			{...props}
			className={twMerge("p-1 w-fit rounded-full bg-pink-200", className)}
		>
			<Icon className={twMerge("fill-pink-700 stroke-pink-700", className)} />
		</div>
	);
}
