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
	fill: ${Styles.Colors.LIGHT.seven};
	transition: 0.15s ease-in;

	:hover {
		fill: ${Styles.Colors.PRIMARY};
	}
`;

// ================= //
// ↓↓↓ Component ↓↓↓ //
// ================= //

type Props = { height?: number };

export const LinkedIn = (props: Props) => {
	return (
		<SVG height={props.height || "10"}>
			<path d="M5.556 10H3.333V3.333h2.222v1.111c.474-.603 1.192-.962 1.958-.979A2.5 2.5 0 0 1 10 5.972V10H7.778V6.25a1.26 1.26 0 0 0-1.248-1.08 1.01 1.01 0 0 0-.974 1.08V10zm-3.333 0H0V3.333h2.222V10zM1.111 2.222a1.11 1.11 0 1 1 0-2.222 1.11 1.11 0 0 1 .786 1.897 1.11 1.11 0 0 1-.786.325z" />
		</SVG>
	);
};
