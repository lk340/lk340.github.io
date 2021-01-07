import styled from "styled-components";
import { animated } from "react-spring";

import * as Styles from "@/utils/styles";
import * as Icons from "@/icons";

/**
 * Dropdown
 * [Dropdown] Header
 * [Dropdown] Items
 */

// ================ //
// ↓↓↓ Dropdown ↓↓↓ //
// ================ //

type DropdownProps = { is_selected: string };

export const Dropdown = styled(animated.div)<DropdownProps>`
	${Styles.Snippets.flex("column")};
	height: ${(props) => (props.is_selected === "true" ? "auto" : "60px")};
	background-color: ${Styles.Colors.LIGHT.one};
	overflow: hidden;
`;

// ========================= //
// ↓↓↓ [Dropdown] Header ↓↓↓ //
// ========================= //

export const DropdownHeader = styled(animated.div)`
	${Styles.Snippets.flex("row", "space-between", "center")};
	padding: 20px;
	width: ${Styles.Constants.sizes.components.info.skills.dropdown.width}px;
	background-color: ${Styles.Colors.NEUTRALS.white_100};
	cursor: pointer;

	:hover #skills-dropdown-title {
		color: ${(props) => {
			return props.theme.isMobile
				? "inherit !important"
				: `${Styles.Colors.PRIMARY} !important`;
		}};
	}

	@media (max-width: 909px) {
		width: 100%;
	}
`;

export const DropdownTitle = styled(animated.span).attrs(() => ({
	id: "skills-dropdown-title",
}))`
	display: block;
	font-size: ${Styles.Constants.fontSizes.components.info.skills.title};
	font-weight: 500;
	transition: 0.15s ease-in-out !important;
`;

export const DropdownArrowContainer = styled(animated.div)`
	${Styles.Snippets.flexRowCenter()};
`;

export const DropdownArrow = styled(Icons.ArrowDown).attrs(() => ({
	height: 20,
}))``;

// ======================== //
// ↓↓↓ [Dropdown] Items ↓↓↓ //
// ======================== //

export const DropdownItems = styled(animated.div)`
	${Styles.Snippets.grid(1, "1fr", 10)};
	padding: 20px;
	transform-origin: top;
`;

export const DropdownItemsText = styled("span")`
	display: block;
	font-size: ${Styles.Constants.fontSizes.components.info.skills.itemText};
`;
