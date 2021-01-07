import * as Spring from "react-spring";

export function menu(open: boolean) {
	return Spring.useSpring({
		from: { transform: "translateX(100%)" },
		to: { transform: open ? "translateX(0%)" : "translateX(100%)" },
	});
}

export function container(open: boolean) {
	return Spring.useSpring({
		from: { transform: "translateX(100%)" },
		to: { transform: open ? "translateX(0%)" : "translateX(100%)" },
		delay: 110,
	});
}

export function content(open: boolean) {
	return Spring.useSpring({
		from: { opacity: "0" },
		to: { opacity: open ? "1" : "0" },
		config: { duration: 150 },
		delay: open ? 700 : 0,
	});
}
