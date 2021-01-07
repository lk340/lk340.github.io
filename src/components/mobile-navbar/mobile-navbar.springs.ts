import * as Spring from "react-spring";

import * as Styles from "@/utils/styles";

export function text(isMenu: boolean, isSelected: boolean) {
	return Spring.useSpring({
		from: { color: isMenu ? Styles.Colors.LIGHT.eight : Styles.Colors.LIGHT.five },
		to: {
			color: isSelected
				? Styles.Colors.PRIMARY
				: isMenu
				? Styles.Colors.LIGHT.eight
				: Styles.Colors.LIGHT.five,
		},
		config: { duration: 150 },
	});
}
