import * as React from "react";

import * as Styled from "./enter.styled";
import * as Springs from "./enter.springs";

type Props = {
	startDelay: number;
	endDelay: number;
	children: React.ReactNode;
};

export const Enter = (props: Props) => {
	console.log(props.startDelay);
	console.log(props.endDelay);

	const animateOverlayContainer = Springs.overlayContainer(props.startDelay);
	const animateOverlay = Springs.overlay(props.endDelay);

	return (
		<Styled.Enter>
			<Styled.EnterOverlayContainer style={animateOverlayContainer}>
				<Styled.EnterOverlay style={animateOverlay} />
			</Styled.EnterOverlayContainer>

			<Styled.EnterChildren>{props.children}</Styled.EnterChildren>
		</Styled.Enter>
	);
};
