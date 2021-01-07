import * as Spring from "react-spring";

export function overlay(delay: number = 0) {
	return Spring.useSpring({
		from: { transform: "scaleX(0)" },
		to: { transform: "scaleX(1)" },
		delay: 3200,
	});
}

export function overlayContainer(delay: number = 0) {
	return Spring.useSpring({
		from: { transform: "scaleX(1)" },
		to: { transform: "scaleX(0)" },
		delay: 3800,
	});
}
