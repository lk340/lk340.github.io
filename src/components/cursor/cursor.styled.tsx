import styled, { css, createGlobalStyle, keyframes } from "styled-components";
import { animated } from "react-spring";

import * as Styles from "@/utils/styles";

// ============== //
// ↓↓↓ Cursor ↓↓↓ //
// ============== //

type CursorProps = {
	x: number;
	y: number;
};

export const Cursor = styled(animated.div)<CursorProps>`
	${Styles.Snippets.square("20px")};
	position: absolute;
	left: ${(props) => `${props.x}px`};
	top: ${(props) => `${props.y}px`};
	transform: translate(-50%, -50%);

	border: red solid 1px;
`;
