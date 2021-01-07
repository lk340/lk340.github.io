import styled from "styled-components";
import { animated } from "react-spring";
import * as Gatsby from "gatsby";

import * as Context from "@/context";
import * as Styles from "@/utils/styles";
import * as Icons from "@/icons";

/**
 * Sidebar
 * Logo Link
 * Pagination
 * Socials
 */

// =============== //
// ↓↓↓ Sidebar ↓↓↓ //
// =============== //

export const Sidebar = styled("aside")`
	${Styles.Snippets.flex("column", "space-between", "auto")};
	height: 100%;
	padding: ${Styles.Constants.paddings.pages.info.sidebar}px;

	@media (max-width: ${Styles.Constants.breakpoints.mobileNavbarBreakpoint}px) {
		display: none;
	}
`;

// ================= //
// ↓↓↓ Logo Link ↓↓↓ //
// ================= //

export const SidebarLogoLinkContainer = styled("article")`
	${Styles.Snippets.flex("row", "auto", "center")};
`;

export const SidebarLogoLink = styled(Gatsby.Link).attrs(() => ({
	to: "/",
}))`
	${Styles.Snippets.flexColumnCenter()};
	position: relative;
`;

export const SidebarLogo = styled(Icons.LogoText).attrs(() => ({
	height: 30,
}))``;

// ================== //
// ↓↓↓ Pagination ↓↓↓ //
// ================== //

export const SidebarPagination = styled("article")`
	${Styles.Snippets.grid(1, "1fr", 15)};
`;

export const SidebarPaginationLinkContainer = styled("div")`
	${Styles.Snippets.flex("row", "auto", "center")};
`;

export const SidebarPaginationLinkLineContainer = styled("div")`
	width: ${Styles.Constants.sizes.pages.info.sidebar.paginationLink.width.selected}px;
	margin-right: 10px;
`;

type LinkLineProps = {
	set_page: Context.Info.Page;
	page: Context.Info.Page;
};

export const SidebarPaginationLinkLine = styled(animated.div)<LinkLineProps>`
	${Styles.Snippets.clearAnchor()};
	${Styles.Snippets.size(
		`${Styles.Constants.sizes.pages.info.sidebar.paginationLink.width.notSelected}px`,
		`${Styles.Constants.sizes.pages.info.sidebar.paginationLink.height}px`,
	)};
	background-color: ${Styles.Colors.LIGHT.seven};
	cursor: pointer;
	pointer-events: ${(props) => (props.set_page === props.page ? "none" : "default")};

	:hover {
		background-color: ${Styles.Colors.LIGHT.eight} !important;
	}
`;

export const SidebarPaginationLinkText = styled(animated.span)`
	${Styles.Snippets.noTextHighlight()};
	display: block;
	color: ${Styles.Colors.PRIMARY};
	font-family: "quicksand";
	font-size: ${Styles.Constants.fontSizes.pages.info.sidebar.paginationLinkText};
	font-weight: 400;
	line-height: 100%;
`;

// =============== //
// ↓↓↓ Socials ↓↓↓ //
// =============== //

export const SidebarSocials = styled("article")`
	${Styles.Snippets.grid(1, "1fr", 20)};
`;

export const SidebarSocialsLink = styled("a").attrs(() => ({
	target: "_blank",
}))`
	${Styles.Snippets.clearAnchor()};
	${Styles.Snippets.removeAutoContainerWidthFill()};
`;

export const SidebarSocialsGitHub = styled(Icons.GitHub).attrs(() => ({
	height: Styles.Constants.sizes.pages.info.sidebar.socialsIcon.height,
}))``;

export const SidebarSocialsLinkedIn = styled(Icons.LinkedIn).attrs(() => ({
	height: Styles.Constants.sizes.pages.info.sidebar.socialsIcon.height,
}))``;

export const SidebarSocialsAngelList = styled(Icons.AngelList).attrs(() => ({
	height: Styles.Constants.sizes.pages.info.sidebar.socialsIcon.height,
}))``;
