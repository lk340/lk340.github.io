import * as React from "react";

type Props = {
	fill?: string;
	height?: number;
};

export const ArrowRight = (props: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={props.height || "10"}
			viewBox="0 0 10 10"
			fill="none"
		>
			<g clipPath="url(#A)">
				<path
					d="M3.946 8.946L5 10l5-5-5-5-1.054 1.054 3.2 3.2H0v1.49h7.146l-3.2 3.2z"
					fill={props.fill || "#212121"}
				/>
			</g>
			<defs>
				<clipPath id="A">
					<path fill="#fff" d="M0 0h10v10H0z" />
				</clipPath>
			</defs>
		</svg>
	);
};
