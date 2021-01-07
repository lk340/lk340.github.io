import styled, { keyframes } from "styled-components";

import * as Styles from "@/utils/styles";
import * as Icons from "@/icons";

/**
 * About
 * Name / Role / Description
 * Resume Button
 * Scroll
 */

// ============= //
// ↓↓↓ About ↓↓↓ //
// ============= //

export const About = styled("section")`
	${Styles.Snippets.flex("column", "auto", "flex-start")};
`;

// ================================= //
// ↓↓↓ Name / Role / Description ↓↓↓ //
// ================================= //

export const AboutName = styled("h1")`
	${Styles.Snippets.clearSpacing()};
	margin-bottom: 10px;
	font-family: "lora";
	font-size: ${Styles.Constants.fontSizes.components.info.about.name};
	font-weight: 700;

	@media (max-width: ${Styles.Constants.breakpoints.mobileNavbarBreakpoint}px) {
		font-size: 3.125rem;
	}
`;

export const AboutRole = styled("h2")`
	${Styles.Snippets.clearSpacing()};
	margin-bottom: 20px;
	font-size: ${Styles.Constants.fontSizes.components.info.about.role};
`;

export const AboutDescription = styled("p")`
	${Styles.Snippets.clearSpacing()};
	width: 500px;
	margin-bottom: 50px;
	font-size: ${Styles.Constants.fontSizes.components.info.about.description};
	line-height: ${Styles.Constants.lineHeights.body};

	@media (max-width: 788px) {
		width: 100%;
	}
`;

// ===================== //
// ↓↓↓ Resume Button ↓↓↓ //
// ===================== //

export const AboutResumeButton = styled("a").attrs(() => ({
	href: "https://www.dropbox.com/s/ptkibv5t6z302fv/Resume.pdf?dl=0",
	target: "_blank",
}))`
	${Styles.Snippets.flexRowCenter()};
	${Styles.Snippets.clearAnchor()};
	flex-grow: 0;
	/* margin-bottom: 50px; */
	padding: ${Styles.Constants.paddings.pages.home.aboutLink};
	background-color: ${Styles.Colors.PRIMARY};
	transition: 0.1s ease-in-out;
	cursor: pointer;

	:hover {
		background-color: ${(props) => {
			return props.theme.isMobile
				? Styles.Colors.PRIMARY
				: Styles.Colors.PRIMARY_HIGHLIGHT;
		}};
	}

	:hover #resume-button-arrow {
		transform: ${(props) => {
			return props.theme.isMobile ? "translateX(0rem)" : "translateX(0.2rem)";
		}};
	}

	@media (max-width: ${Styles.Constants.breakpoints.mobileNavbarBreakpoint}px) {
		${Styles.Snippets.size("100%", "60px")};
		flex-grow: 1;
	}
`;

export const AboutResumeButtonText = styled("span")`
	display: block;
	margin-right: 10px;
	color: ${Styles.Colors.NEUTRALS.white_100};
	font-size: ${Styles.Constants.fontSizes.components.info.about.resumeButton};
	font-weight: 500;
`;

export const AboutResumeButtonArrowContainer = styled("div").attrs(() => ({
	id: "resume-button-arrow",
}))`
	transition: 0.2s ease-out;
`;

export const AboutResumeButtonArrow = styled(Icons.ArrowRight).attrs(() => ({
	fill: Styles.Colors.NEUTRALS.white_100,
	height: 12,
}))``;

// ============== //
// ↓↓↓ Scroll ↓↓↓ //
// ============== //

export const Scroll = styled("div")`
	${Styles.Snippets.flex("row", "auto", "center")};
	color: ${Styles.Colors.LIGHT.seven};
`;

export const ScrollMouse = styled("div")`
	${Styles.Snippets.size("20px", "30px")};
	position: relative;
	border: ${Styles.Colors.LIGHT.seven} solid 2px;
	border-radius: 10000000rem;
	margin-right: 10px;
`;

const animateMouseScroll = keyframes`
  0% { transform: translateX(-50%) translateY(5px); }
  40% { transform: translateX(-50%) translateY(14px); }
  80% { opacity: 0; }
  100% { opacity: 1; transform: translateX(-50%) translateY(4px); }
`;

export const ScrollMouseAnimation = styled("div")`
	${Styles.Snippets.size("2px", "7px")};
	${Styles.Snippets.animation(animateMouseScroll, 1.6, "infinite")};
	position: absolute;
	left: 50%;
	transform: translateX(-50%) translateY(5px);
	background-color: ${Styles.Colors.LIGHT.seven};
	border-radius: 10000000rem;
`;

export const ScrollText = styled("span")`
	display: block;
	font-size: ${Styles.Constants.fontSizes.components.info.about.scroll};
	font-weight: 600;
	letter-spacing: 0.15rem;
`;
