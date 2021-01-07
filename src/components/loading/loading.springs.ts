import * as Spring from "react-spring";

export function loading(loading: boolean) {
	return Spring.useTransition(loading, null, {
		from: { opacity: "0" },
		enter: { opacity: "1" },
		leave: { opacity: "0" },
		config: { duration: loading ? 0 : undefined },
	});
}

export function animationBar() {
	return Spring.useSpring({
		from: { transform: "translateX(-100%)" },
		to: { transform: "translateX(0%)" },
		config: { duration: 2000 },
	});
}
