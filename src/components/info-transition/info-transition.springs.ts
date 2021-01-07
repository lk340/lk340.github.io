import * as Spring from "react-spring";

export function infoTransition(isSelected: boolean) {
	return Spring.useTransition(isSelected, null, {
		from: { opacity: 0, transform: "translateX(-20px)" },
		enter: { opacity: 1, transform: "translateX(0px)" },
		leave: { opacity: 0, transform: "translateX(20px)" },
	});
}

export function infoTransitionChildren(isSelected: boolean) {
	return Spring.useSpring({
		from: { opacity: "0" },
		to: { opacity: isSelected ? "1" : "0" },
		delay: isSelected ? 600 : 0,
	});
}
