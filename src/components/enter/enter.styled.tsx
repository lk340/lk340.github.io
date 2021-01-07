import styled, { css } from "styled-components";
import { animated } from "react-spring";

import * as Styles from "@/utils/styles";

// ============= //
// ↓↓↓ Enter ↓↓↓ //
// ============= //

export const Enter = styled("div")`
	position: relative;
`;

const overlayStyles = css`
	${Styles.Snippets.fillContainer()};
	position: absolute;
`;

export const EnterOverlayContainer = styled(animated.div)`
	${overlayStyles};
	background-color: ${Styles.Colors.NEUTRALS.white_100};
	transform-origin: right;
`;

export const EnterOverlay = styled(animated.div)`
	${overlayStyles};
	background-color: ${Styles.Colors.PRIMARY};
	transform-origin: left;
`;

export const EnterChildren = styled("div")`
	${Styles.Snippets.flexRowCenter()};
`;
