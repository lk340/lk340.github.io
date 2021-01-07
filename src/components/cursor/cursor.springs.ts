import * as Spring from "react-spring";

export function cursor() {
	return Spring.useSpring({
		from: { transform: "rotate(0deg)" },
		to: { transform: "rotate(360deg)" },
	});
}
