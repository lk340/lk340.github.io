import * as React from "react";

import * as Styled from "./cursor.styled";
import * as Springs from "./cursor.springs";

export const Cursor = () => {
	const [coordinates, setCoordinates] = React.useState({ x: 0, y: 0 });

	React.useEffect(() => {
		addCursorTracking();
		// Clean Up
		return () => removeCursorTracking();
	}, []);

	function addCursorTracking() {
		document.addEventListener("mousemove", setCursorPositions);
	}

	function removeCursorTracking() {
		document.removeEventListener("mousemove", setCursorPositions);
	}

	function setCursorPositions(event: any) {
		setCoordinates({ x: event.clientX, y: event.clientY });
	}

	// --- Animations --- //
	const animateCursor = Springs.cursor();

	// --- Grabbing Cursor --- //
	document.body.style.cursor = "none";

	return <Styled.Cursor x={coordinates.x} y={coordinates.y} />;
};
