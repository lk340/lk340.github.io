import * as React from "react";
import styled from "styled-components";

import * as Styles from "@/utils/styles";

// ========================= //
// ↓↓↓ Styled Components ↓↓↓ //
// ========================= //

export const SVG = styled("svg").attrs(() => ({
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 10 10",
	fill: "none",
}))`
	fill: ${Styles.Colors.LIGHT.eight};
`;

// ================= //s
// ↓↓↓ Component ↓↓↓ //
// ================= //

type Props = {
	height?: number;
};

export const Menu = (props: Props) => {
	return (
		<SVG height={props.height || "10"}>
			<path d="M9.5 2.5h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1zm0 2h-9a.5.5 0 1 0 0 1h9a.5.5 0 1 0 0-1zm-5 2h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1z" />
		</SVG>
	);
};
