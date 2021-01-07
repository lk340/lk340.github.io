import styled, { css } from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Styles from "@/utils/styles";
import * as Icons from "@/icons";

/**
 * Home
 * About Link
 */

// ============ //
// ↓↓↓ Home ↓↓↓ //
// ============ //

export const Home = styled("div").attrs(() => ({
	id: "home",
}))`
	${Styles.Snippets.fillView()};
	${Styles.Snippets.noTextHighlight()};
	position: relative;
	overflow: hidden;
`;

export const HomeParticles = styled(animated.div)`
	position: absolute;
	z-index: 1;
`;

export const HomeContent = styled("div")`
	${Styles.Snippets.fillContainer()}
	${Styles.Snippets.flexColumnCenter()};
	position: absolute;
	z-index: 2;
`;

export const HomeName = styled(animated.h1)`
	${Styles.Snippets.clearSpacing()};
	margin-bottom: 20px;
	color: ${Styles.Colors.TEXT.black};
	font-family: ${Styles.Constants.fonts.other};
	font-size: 2.5rem;
	line-height: 100%;
	letter-spacing: 0.4rem;
`;

export const HomeRole = styled(animated.h2)`
	${Styles.Snippets.clearSpacing()};
	margin-bottom: 30px;
	color: ${Styles.Colors.LIGHT.eight};
	font-family: ${Styles.Constants.fonts.secondary};
	font-size: 1.25rem;
	font-weight: 300;
	line-height: 100%;
`;

// ================== //
// ↓↓↓ About Link ↓↓↓ //
// ================== //

export const HomeAboutLinkContainer = styled(animated.div)`
	${Styles.Snippets.flexRowCenter()};
	position: relative;

	:hover #about-link-border-top {
		transform: scaleX(1);
	}

	:hover #about-link-border-right {
		transform: scaleY(1);
	}

	:hover #about-link-border-bottom {
		transform: scaleX(1);
	}

	:hover #about-link-border-left {
		transform: scaleY(1);
	}
`;

const aboutLinkContainerBorderStyles = css`
	position: absolute;
	display: ${(props) => (props.theme.isMobile ? "none" : "block")};
	background-color: ${Styles.Colors.PRIMARY};
	transition: 0.2s ease-in-out;
`;

export const HomeAboutLinkContainerBorderTop = styled("div").attrs(() => ({
	id: "about-link-border-top",
}))`
	${Styles.Snippets.size("100%", "1px")};
	${aboutLinkContainerBorderStyles};
	top: 0;
	transform: scaleX(0);
	transform-origin: left;
`;

export const HomeAboutLinkContainerBorderRight = styled("div").attrs(() => ({
	id: "about-link-border-right",
}))`
	${Styles.Snippets.size("1px", "100%")};
	${aboutLinkContainerBorderStyles};
	right: 0px;
	transform: scaleY(0);
	transform-origin: top;
`;

export const HomeAboutLinkContainerBorderBottom = styled("div").attrs(() => ({
	id: "about-link-border-bottom",
}))`
	${Styles.Snippets.size("100%", "1px")};
	${aboutLinkContainerBorderStyles};
	bottom: 0;
	transform: scaleX(0);
	transform-origin: right;
`;

export const HomeAboutLinkContainerBorderLeft = styled("div").attrs(() => ({
	id: "about-link-border-left",
}))`
	${Styles.Snippets.size("1px", "100%")};
	${aboutLinkContainerBorderStyles};
	left: 0;
	transform: scaleY(0);
	transform-origin: bottom;
`;

export const HomeAboutLink = styled(Gatsby.Link)`
	${Styles.Snippets.clearAnchor()};
	padding: ${Styles.Constants.paddings.pages.home.aboutLink};
	color: ${Styles.Colors.PRIMARY};
	border: ${(props) => {
		if (props.theme.isMobile) return `${Styles.Colors.PRIMARY} solid 1px`;
		else return `${Styles.Colors.NEUTRALS.transparent} solid 1px`;
	}};
	font-family: ${Styles.Constants.fonts.secondary};
	font-size: 1rem;
	font-weight: 600;
	line-height: 100%;
	transition: 0.2s ease-out;
	cursor: pointer;

	:hover #arrow-container {
		transform: ${(props) => {
			return props.theme.isMobile ? "translateX(0rem)" : "translateX(0.2rem)";
		}};
	}
`;

export const HomeAboutLinkText = styled("p")`
	${Styles.Snippets.clearSpacing()};
	margin-right: 12px;
`;

export const HomeAboutLinkArrowContainer = styled("div").attrs(() => ({
	id: "arrow-container",
}))`
	transition: 0.2s ease-out;
`;

export const HomeAboutLinkArrow = styled(Icons.ArrowRight).attrs(() => ({
	fill: Styles.Colors.PRIMARY,
	height: 12,
}))``;
