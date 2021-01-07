import * as React from "react";
import styled from "styled-components";
import * as Spring from "react-spring";

import * as Styles from "@/utils/styles";

// ========================= //
// ↓↓↓ Styled Components ↓↓↓ //
// ========================= //

export const SVG = styled(Spring.animated.svg).attrs(() => ({
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 10 10",
	fill: "none",
}))``;

// =============== //
// ↓↓↓ Springs ↓↓↓ //
// =============== //

function springSVG(isSelected: boolean) {
	return Spring.useSpring({
		from: {
			fill: Styles.Colors.LIGHT.five,
		},
		to: {
			fill: isSelected ? Styles.Colors.PRIMARY : Styles.Colors.LIGHT.five,
		},
		config: { duration: 150 },
	});
}

// ================= //s
// ↓↓↓ Component ↓↓↓ //
// ================= //

type Props = {
	height?: number;
	isSelected: boolean;
};

export const About = (props: Props) => {
	const animateSVG = springSVG(props.isSelected);

	return (
		<SVG height={props.height || "10"} style={animateSVG}>
			<path d="M5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 1 0 0 5zm0 1.25c-1.669 0-5 .838-5 2.5v.625c0 .344.281.625.625.625h8.75c.344 0 .625-.281.625-.625V8.75c0-1.662-3.331-2.5-5-2.5z" />
		</SVG>
	);
};
