import * as Spring from "react-spring";

import * as Styles from "@/utils/styles";

export function dropdown(isSelected: boolean) {
	return Spring.useSpring({
		from: { border: `${Styles.Colors.LIGHT.seven} solid 1px` },
		to: {
			border: isSelected
				? `${Styles.Colors.PRIMARY} solid 1px`
				: `${Styles.Colors.LIGHT.seven} solid 1px`,
		},
		config: { duration: 150 },
	});
}

export function header(isSelected: boolean) {
	return Spring.useSpring({
		from: { borderBottom: `${Styles.Colors.NEUTRALS.white_100} solid 1px` },
		to: {
			borderBottom: isSelected
				? `${Styles.Colors.LIGHT.four} solid 1px`
				: `${Styles.Colors.NEUTRALS.white_100} solid 1px`,
		},
		config: { duration: 150 },
	});
}

export function title(isSelected: boolean) {
	return Spring.useSpring({
		from: { color: Styles.Colors.LIGHT.seven },
		to: { color: isSelected ? Styles.Colors.PRIMARY : Styles.Colors.LIGHT.seven },
		config: { duration: 150 },
	});
}

export function arrowContainer(isSelected: boolean) {
	return Spring.useSpring({
		from: { transform: "rotateX(0deg)" },
		to: { transform: isSelected ? "rotateX(180deg)" : "rotateX(0deg)" },
	});
}

export function items(isSelected: boolean) {
	return Spring.useSpring({
		from: { opacity: "0" },
		to: { opacity: isSelected ? "1" : "0" },
		config: { duration: 200 },
		delay: 300,
	});
}
