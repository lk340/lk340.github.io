import * as Spring from "react-spring";

import * as Styles from "@/utils/styles";

export function linkLine(selected: boolean) {
	return Spring.useSpring({
		to: {
			width: selected
				? `${Styles.Constants.sizes.pages.info.sidebar.paginationLink.width.selected}px`
				: `${Styles.Constants.sizes.pages.info.sidebar.paginationLink.width.notSelected}px`,
			backgroundColor: selected ? Styles.Colors.PRIMARY : Styles.Colors.LIGHT.seven,
		},
		config: { duration: 100 },
	});
}

export function linkText(selected: boolean) {
	return Spring.useSpring({
		from: {
			opacity: "0",
			transform: "translateX(-4px)",
		},
		to: {
			opacity: selected ? "1" : "0",
			transform: selected ? "translateX(0px)" : "translateX(-4px)",
		},
		config: { duration: 100 },
		delay: 200,
	});
}
