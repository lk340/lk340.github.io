import styled from "styled-components";
import { animated } from "react-spring";

import * as Styles from "@/utils/styles";
import * as Icons from "@/icons";

/**
 * Mobile Navbar
 * Link
 */

// ===================== //
// ↓↓↓ Mobile Navbar ↓↓↓ //
// ===================== //

export const MobileNavbar = styled("nav")`
	${Styles.Snippets.fixed("auto", "0px", "0px", "0px", 9)};
	${Styles.Snippets.flex("row", "space-between", "center")};
	display: none;
	height: ${Styles.Constants.sizes.components.mobileNavbar.height}px;
	padding: 0px ${Styles.Constants.paddings.responsive.tablet}px;
	background-color: ${Styles.Colors.NEUTRALS.white_100};
	border-top: ${Styles.Colors.LIGHT.five} solid 1px;

	@media (max-width: ${Styles.Constants.breakpoints.mobileNavbarBreakpoint}px) {
		display: flex;
	}

	@media (max-width: ${Styles.Constants.breakpoints.mobile}px) {
		padding: 0px ${Styles.Constants.paddings.responsive.mobile}px;
	}
`;

// ============ //
// ↓↓↓ Link ↓↓↓ //
// ============ //

export const MobileNavbarLink = styled("div")`
	${Styles.Snippets.flexColumnCenter()};
	cursor: pointer;
`;

type LinkProps = { isSelected: boolean };

export const MobileNavbarLinkIconAbout = styled(Icons.About).attrs(
	(props: LinkProps) => ({
		height: 14,
		isSelected: props.isSelected,
	}),
)``;

export const MobileNavbarLinkIconSkills = styled(Icons.Skills).attrs(
	(props: LinkProps) => ({
		height: 14,
		isSelected: props.isSelected,
	}),
)``;

export const MobileNavbarLinkIconProjects = styled(Icons.Projects).attrs(
	(props: LinkProps) => ({
		height: 14,
		isSelected: props.isSelected,
	}),
)``;

export const MobileNavbarLinkIconContact = styled(Icons.Contact).attrs(
	(props: LinkProps) => ({
		height: 14,
		isSelected: props.isSelected,
	}),
)``;

export const MobileNavbarLinkIconMenu = styled(Icons.Menu).attrs(() => ({
	height: 14,
}))``;

export const MobileNavbarLinkText = styled(animated.span)`
	display: block;
	margin-top: 5px;
	font-size: ${Styles.Constants.fontSizes.components.mobileNavbar.link};
	font-weight: 500;
`;
