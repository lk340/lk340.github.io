import styled from "styled-components";
import { animated } from "react-spring";

import * as Styles from "@/utils/styles";

// =============== //
// ↓↓↓ Loading ↓↓↓ //
// =============== //

export const Loading = styled(animated.div)`
	${Styles.Snippets.absolute("0px", "0px", "0px", "0px", 10)};
	${Styles.Snippets.flexRowCenter()};
	background-color: ${Styles.Colors.NEUTRALS.white_100};

	@media (max-width: 520px) {
		padding: 0px ${Styles.Constants.paddings.responsive.tablet}px;
	}

	@media (max-width: ${Styles.Constants.breakpoints.mobile}px) {
		padding: 0px ${Styles.Constants.paddings.responsive.mobile}px;
	}
`;

export const LoadingContainer = styled("div")`
	${Styles.Snippets.flexColumnCenter()};

	@media (max-width: 520px) {
		width: 100%;
	}
`;

export const LoadingText = styled("span")`
	display: block;
	margin-bottom: 20px;
	text-align: center;
`;

export const LoadingAnimation = styled("div")`
	${Styles.Snippets.size("400px", "30px")};
	position: relative;
	flex-shrink: 0;
	border: ${Styles.Colors.PRIMARY_HIGHLIGHT} solid 1px;
	overflow: hidden;

	@media (max-width: 520px) {
		width: 100%;
	}
`;

export const LoadingAnimationBar = styled(animated.div)`
	${Styles.Snippets.fillContainer()};
	position: absolute;
	background-color: ${Styles.Colors.PRIMARY};
	transition: ease-in;
`;
