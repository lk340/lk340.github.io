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

export const Projects = (props: Props) => {
	const animateSVG = springSVG(props.isSelected);

	return (
		<SVG height={props.height || "10"} style={animateSVG}>
			<path d="M10 3.184a.91.91 0 0 1-.909.909c-.082 0-.159-.009-.232-.032L7.241 5.675c.023.073.032.155.032.236a.91.91 0 0 1-.909.909.91.91 0 0 1-.909-.909c0-.082.009-.164.032-.236L4.327 4.516c-.073.023-.155.032-.236.032s-.164-.009-.236-.032L1.786 6.589c.023.073.032.15.032.232a.91.91 0 0 1-.909.909A.91.91 0 0 1 0 6.82a.91.91 0 0 1 .909-.909c.082 0 .159.009.232.032l2.073-2.068c-.023-.073-.032-.155-.032-.236a.91.91 0 0 1 .909-.909.91.91 0 0 1 .909.909c0 .082-.009.164-.032.236l1.159 1.159c.073-.023.155-.032.236-.032s.164.009.236.032l1.614-1.618c-.023-.073-.032-.15-.032-.232a.91.91 0 0 1 .909-.909.91.91 0 0 1 .909.909z" />
		</SVG>
	);
};
