import * as React from "react";
import styled from "styled-components";

import * as Styles from "@/utils/styles";

// ========================= //
// ↓↓↓ Styled Components ↓↓↓ //
// ========================= //

type SvgProps = { isSelected: boolean };

const SVG = styled("svg").attrs(() => ({
	id: "arrow-down",
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 10 10",
}))<SvgProps>`
	fill: ${(props) => {
		return props.isSelected ? Styles.Colors.PRIMARY : Styles.Colors.LIGHT.seven;
	}};
	transition: 0.15s ease-in;

	:hover {
		fill: ${(props) =>
			props.theme.isMobile ? Styles.Colors.LIGHT.seven : Styles.Colors.PRIMARY};
	}
`;

// ================= //
// ↓↓↓ Component ↓↓↓ //
// ================= //

type Props = {
	fill?: string;
	height?: number;
	isSelected: boolean;
};

export const ArrowDown = (props: Props) => {
	return (
		<SVG height={props.height || "10"} isSelected={props.isSelected}>
			<g clipPath="url(#A)">
				<path d="M8.497 1.75L5 5.248 1.503 1.75 0 3.253l5 4.999 5-4.999L8.497 1.75z" />
			</g>
			<defs>
				<clipPath id="A">
					<path fill="#fff" d="M0 0h10v10H0z" />
				</clipPath>
			</defs>
		</SVG>
	);
};
