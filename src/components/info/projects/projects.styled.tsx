import styled, { css, createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

import * as Styles from "@/utils/styles";

// ================ //
// ↓↓↓ Projects ↓↓↓ //
// ================ //

export const Projects = styled("section")`
	${Styles.Snippets.grid(2, "1fr", 40)};

	@media (max-width: 1160px) {
		${Styles.Snippets.grid(1, "1fr", 30)};
	}
`;

type ProjectsItemProps = { backgroundImage: string };

export const ProjectsItem = styled("div")<ProjectsItemProps>`
	${Styles.Snippets.size(
		`${Styles.Constants.sizes.pages.info.projects.item.width}px`,
		`${Styles.Constants.sizes.pages.info.projects.item.height}px`,
	)};
	position: relative;
	border: ${Styles.Colors.LIGHT.four} solid 2px;
	background-color: ${Styles.Colors.LIGHT.two};
	background-image: ${(props) => `url(${props.backgroundImage})`};
	background-position: center;
	background-repeat: no-repeat;
	overflow: hidden;

	:hover #info-page-projects-item-overlay {
		opacity: 1;
	}

	:hover #info-page-projects-item-modal {
		opacity: 1;
		transform: translateX(0px);
	}

	@media (max-width: 694px) {
		width: 100%;
	}
`;

export const ProjectsItemOverlay = styled("div").attrs(() => ({
	id: "info-page-projects-item-overlay",
}))`
	${Styles.Snippets.absolute("0px", "0px", "0px", "0", 2)};
	background-color: ${Styles.Colors.NEUTRALS.black_40};
	opacity: 0;
	transition: 0.15s ease-in;
`;

export const ProjectsItemModal = styled("div").attrs(() => ({
	id: "info-page-projects-item-modal",
}))`
	${Styles.Snippets.absolute("0px", "0px", "0px", "auto", 3)};
	${Styles.Snippets.flexColumnCenter()};
	background-color: ${Styles.Colors.LIGHT.two};
	padding: 0px 30px;
	font-size: 14px;
	opacity: 0;
	transition: 0.2s ease-in;
	transform: translateX(20px);
`;

export const ProjectsItemModalTitle = styled("h1")`
	${Styles.Snippets.clearSpacing()};
	font-size: 16px;
	margin-bottom: 20px;
`;

export const ProjectsItemModalTech = styled("span")`
	display: block;
	width: 200px;
	margin-bottom: 20px;
	color: ${Styles.Colors.LIGHT.eight};
	text-align: center;
	line-height: ${Styles.Constants.lineHeights.body};
`;

export const ProjectsItemModalDescription = styled(ProjectsItemModalTech)`
	color: ${Styles.Colors.TEXT.black};
`;

const linkStyles = css`
	${Styles.Snippets.clearAnchor()};
	color: ${Styles.Colors.LIGHT.eight};
	font-weight: 500;
	transition: 0.15s ease-in;

	:hover {
		color: ${(props) => {
			return props.theme.isMobile ? Styles.Colors.LIGHT.eight : Styles.Colors.PRIMARY;
		}};
	}
`;

export const ProjectsItemModalLiveLink = styled("a").attrs(() => ({
	target: "_blank",
}))`
	${linkStyles};
	margin-bottom: 10px;
`;

export const ProjectsItemModalGitHubLink = styled("a").attrs(() => ({
	target: "_blank",
}))`
	${linkStyles};
`;
