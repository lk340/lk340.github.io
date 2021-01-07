import * as Spring from "react-spring";

export function particles() {
	return Spring.useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
	});
}

export function name() {
	return Spring.useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 400 },
		delay: 400,
	});
}

export function role() {
	return Spring.useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		delay: 800,
	});
}

export function aboutLink() {
	return Spring.useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		delay: 3400,
	});
}
