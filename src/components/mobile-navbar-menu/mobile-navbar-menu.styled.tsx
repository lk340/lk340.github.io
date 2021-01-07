import styled from "styled-components";
import { animated } from "react-spring";

import * as Styles from "@/utils/styles";

/**
 * Mobile Navbar menu
 * Contents
 * Close Button
 */

// ========================== //
// ↓↓↓ Mobile Navbar Menu ↓↓↓ //
// ========================== //

export const MobileNavbarMenu = styled(animated.section)`
	${Styles.Snippets.absolute("0px", "0px", "0px", "0px", 10)};
	display: none;
	background-color: ${Styles.Colors.PRIMARY};

	@media (max-width: ${Styles.Constants.breakpoints.mobileNavbarBreakpoint}px) {
		display: block;
	}
`;

export const MobileNavbarMenuContainer = styled(animated.div)`
	${Styles.Snippets.flex("column")};
	${Styles.Snippets.fillContainer()};
	background-color: ${Styles.Colors.NEUTRALS.white_100};
`;

// ================ //
// ↓↓↓ Contents ↓↓↓ //
// ================ //

export const MobileNavbarMenuContainerContents = styled("div")`
	flex: 1;
	padding: ${Styles.Constants.paddings.responsive.mobile}px;
`;

type ContentsLinkProps = { is_margin: string };

export const MobileNavbarMenuContainerContentsLinkContainer = styled(animated.div)``;

export const MobileNavbarMenuContainerContentsLink = styled("a").attrs(() => ({
	target: "_blank",
}))<ContentsLinkProps>`
	${Styles.Snippets.clearAnchor()};
	${Styles.Snippets.flexRowCenter()};
	height: ${Styles.Constants.sizes.components.mobileNavbarMenu.button.height}px;
	margin-bottom: ${(props) => (props.is_margin === "true" ? "30px" : "0px")};
	border: ${Styles.Colors.LIGHT.three} solid 2px;
	transition: 0.15s ease-in;

	:hover {
		border: ${(props) => {
			return props.theme.isMobile
				? `${Styles.Colors.LIGHT.three} solid 2px`
				: `${Styles.Colors.PRIMARY} solid 2px`;
		}};
	}

	:hover #mobile-navbar-menu-contents-text {
		color: ${(props) => {
			return props.theme.isMobile ? Styles.Colors.TEXT.black : Styles.Colors.PRIMARY;
		}};
	}
`;

export const MobileNavbarMenuContainerContentsLinkIcon = styled("div")`
	margin-right: 20px;

	@media (max-width: 250px) {
		margin-right: 0px;
	}
`;

export const MobileNavbarMenuContainerContentsLinkText = styled("span").attrs(() => ({
	id: "mobile-navbar-menu-contents-text",
}))`
	display: block;
	color: ${Styles.Colors.TEXT.black};
	font-size: ${Styles.Constants.fontSizes.components.mobileNavbarMenu};
	font-weight: 700;
	transition: 0.15s ease-in;

	@media (max-width: 250px) {
		display: none;
	}
`;

// ==================== //
// ↓↓↓ Close Button ↓↓↓ //
// ==================== //

export const MobileNavbarMenuContainerCloseContainer = styled(animated.div)`
	padding: 0px ${Styles.Constants.paddings.responsive.tablet}px;

	@media (max-width: ${Styles.Constants.breakpoints.mobile}px) {
		padding: 0px ${Styles.Constants.paddings.responsive.mobile}px;
	}
`;

export const MobileNavbarMenuContainerCloseButton = styled(animated.button)`
	${Styles.Snippets.flexRowCenter()};
	${Styles.Snippets.size(
		"100%",
		`${Styles.Constants.sizes.components.mobileNavbarMenu.button.height}px`,
	)};
	margin-bottom: ${Styles.Constants.paddings.responsive.mobile}px;
	color: ${Styles.Colors.PRIMARY};
	background-color: ${(props) => {
		return props.theme.isMobile ? Styles.Colors.LIGHT.three : Styles.Colors.LIGHT.two;
	}};
	border: none;
	font-size: 1rem;
	font-weight: 700;
	transition: 0.1s ease-in;
	outline: none;
	cursor: pointer;

	:hover {
		background-color: ${(props) => {
			return props.theme.isMobile ? Styles.Colors.LIGHT.two : Styles.Colors.LIGHT.three;
		}};
	}
`;
