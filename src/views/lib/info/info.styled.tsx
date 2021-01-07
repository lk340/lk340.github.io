import styled from "styled-components";

import * as Styles from "@/utils/styles";

/**
 * Info
 * Main
 */

// ============ //
// ↓↓↓ Info ↓↓↓ //
// ============ //

export const Info = styled("div")`
	${Styles.Snippets.fillView()};
	${Styles.Snippets.flex("row", "space-between", "auto")};
	position: relative;

	@media (max-width: ${Styles.Constants.breakpoints.mobileNavbarBreakpoint}px) {
		padding: 0px 0px ${Styles.Constants.sizes.components.mobileNavbar.height}px;
	}
`;

// ============ //
// ↓↓↓ Main ↓↓↓ //
// ============ //

export const InfoMain = styled("main")`
	${Styles.Snippets.fillContainer()};
	${Styles.Snippets.flex("row", "auto", "center")};
	${Styles.Snippets.noTextHighlight()};
	position: relative;
	max-width: ${Styles.Constants.globals.maxWidth}px;
	overflow-x: hidden;

	@media (max-width: 1530px) {
		padding: 0px 30px;
	}

	@media (max-width: ${Styles.Constants.breakpoints.mobileNavbarBreakpoint}px) {
		${Styles.Snippets.flexRowCenter()};
		${Styles.Snippets.hideScrollbar()};
		padding: 0px 0px ${Styles.Constants.sizes.components.mobileNavbar.height}px;
	}
`;

// Required to evenly center/offset the main section.
export const InfoSidebarDummy = styled("div")`
	width: 165px;
	height: 100%;

	@media (max-width: ${Styles.Constants.breakpoints.mobileNavbarBreakpoint}px) {
		display: none;
	}
`;
