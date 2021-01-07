import styled from "styled-components";
import * as Gatsby from "gatsby";

import * as Styles from "@/utils/styles";

// ===================== //
// ↓↓↓ 404 Not Found ↓↓↓ //
// ===================== //

export const NotFound = styled("main")`
	${Styles.Snippets.flexColumnCenter()};
	${Styles.Snippets.fillView()};
	padding: 0px ${Styles.Constants.paddings.responsive.tablet}px;

	@media (max-width: ${Styles.Constants.breakpoints.mobile}px) {
		padding: 0px ${Styles.Constants.paddings.responsive.mobile}px;
	}
`;

export const NotFoundHeader = styled("h1")`
	${Styles.Snippets.clearSpacing()};
	margin-bottom: 80px;
	font-size: ${Styles.Constants.fontSizes.pages.notFound.title};
	line-height: ${Styles.Constants.lineHeights.body};

	@media (max-width: ${Styles.Constants.breakpoints.tablet}px) {
		font-size: 2rem;
	}

	@media (max-width: ${Styles.Constants.breakpoints.mobile}px) {
		margin-bottom: 40px;
	}
`;

export const NotFoundBody = styled("section")`
	font-size: ${Styles.Constants.fontSizes.pages.notFound.body};
`;

export const NotFoundBodyText = styled("span")`
	display: block;
`;

export const NotFoundBodyLink = styled(Gatsby.Link)`
	color: ${Styles.Colors.PRIMARY};
	font-weight: 700;
	transition: 0.15s ease-in;

	:hover {
		color: ${(props) =>
			props.theme.isMobile ? Styles.Colors.PRIMARY : Styles.Colors.PRIMARY_HIGHLIGHT};
	}
`;
