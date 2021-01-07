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

export const Skills = (props: Props) => {
	const animateSVG = springSVG(props.isSelected);

	return (
		<SVG height={props.height || "10"} style={animateSVG}>
			<path d="M2.25 9.5H.5A.5.5 0 0 1 0 9V4a.5.5 0 0 1 .5-.5h1.75a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5zm3.625-9h-1.75a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h1.75a.5.5 0 0 0 .5-.5V1a.5.5 0 0 0-.5-.5zm3.625 4H7.75a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5H9.5A.5.5 0 0 0 10 9V5a.5.5 0 0 0-.5-.5z" />
		</SVG>
	);
};
