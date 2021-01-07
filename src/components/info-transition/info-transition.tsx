import * as React from "react";

import * as Styled from "./info-transition.styled";
import * as Springs from "./info-transition.springs";

type Props = {
	isSelected: boolean;
	children: React.ReactNode;
};

export const InfoTransition = (props: Props) => {
	const { isSelected, children } = props;

	const animateInfoTransition = Springs.infoTransition(isSelected);
	const animateInfoTransitionChildren = Springs.infoTransitionChildren(isSelected);

	return (
		<>
			{animateInfoTransition.map(
				({ item, key, props }) =>
					item && (
						<Styled.InfoTransition key={key} style={props}>
							<Styled.InfoTransitionChildren style={animateInfoTransitionChildren}>
								{children}
							</Styled.InfoTransitionChildren>
						</Styled.InfoTransition>
					),
			)}
		</>
	);
};
