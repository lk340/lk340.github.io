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

export const Contact = (props: Props) => {
	const animateSVG = springSVG(props.isSelected);

	return (
		<SVG height={props.height || "10"} style={animateSVG}>
			<path d="M9 9H1a1 1 0 0 1-1-1V1.957A1 1 0 0 1 1 1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM1 2.934V8h8V2.934L5 5.6 1 2.934zM1.4 2L5 4.4 8.6 2H1.4z" />
		</SVG>
	);
};
