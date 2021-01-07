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

// ================= //s
// ↓↓↓ Component ↓↓↓ //
// ================= //

type Props = { height?: number };

export const GitHub = (props: Props) => {
	return (
		<SVG height={props.height || "10"}>
			<path d="M5 .125A5 5 0 0 0 .065 4.323 5 5 0 0 0 3.42 9.866c.251.045.34-.109.34-.241l-.006-.852c-1.391.301-1.684-.67-1.684-.67a1.32 1.32 0 0 0-.555-.731c-.451-.31.035-.303.035-.303.321.044.604.234.765.515.137.249.367.432.64.51s.566.044.813-.095a1.07 1.07 0 0 1 .318-.668c-1.109-.126-2.276-.555-2.276-2.471-.006-.495.178-.975.514-1.338a1.8 1.8 0 0 1 .05-1.323s.419-.135 1.374.512a4.73 4.73 0 0 1 2.502 0c.955-.647 1.374-.512 1.374-.512a1.79 1.79 0 0 1 .05 1.323c.338.364.521.844.513 1.34 0 1.921-1.168 2.343-2.281 2.467a1.2 1.2 0 0 1 .338.925l-.006 1.372c0 .134.089.289.344.24A5 5 0 0 0 5 .125z" />
		</SVG>
	);
};
