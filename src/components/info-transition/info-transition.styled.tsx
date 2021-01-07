import styled from "styled-components";
import { animated } from "react-spring";

import * as Styles from "@/utils/styles";

// ======================= //
// ↓↓↓ Info Transition ↓↓↓ //
// ======================= //

export const InfoTransition = styled(animated.div)`
	position: absolute;

	@media (max-width: 909px) {
		width: calc(100% - 30px);
	}

	@media (max-width: ${Styles.Constants.breakpoints.mobileNavbarBreakpoint}px) {
		width: 100%;
		padding: 0px ${Styles.Constants.paddings.responsive.tablet}px;
		flex-shrink: 0;
	}

	@media (max-width: ${Styles.Constants.breakpoints.mobile}px) {
		padding: 0px ${Styles.Constants.paddings.responsive.mobile}px;
	}
`;

export const InfoTransitionChildren = styled(animated.div)``;
