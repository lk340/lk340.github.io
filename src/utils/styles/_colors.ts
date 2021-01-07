import * as Polished from "polished";

/**
 * Neutrals
 * Primary
 * Secondary
 * Light Mode
 * Dark Mode
 * Text
 * Task Status
 * Registration Password Strength
 * Modal
 * Alerts
 */

// ================ //
// ↓↓↓ Neutrals ↓↓↓ //
// ================ //

const white = "#FFFFFF";
const black = "#000000";

export const NEUTRALS = {
	white_100: white,
	white_80: Polished.transparentize(0.2, white),
	white_60: Polished.transparentize(0.4, white),
	white_40: Polished.transparentize(0.6, white),
	white_20: Polished.transparentize(0.8, white),
	black_100: black,
	black_80: Polished.transparentize(0.2, black),
	black_60: Polished.transparentize(0.4, black),
	black_40: Polished.transparentize(0.6, black),
	black_20: Polished.transparentize(0.8, black),
	transparent: "rgba(0, 0, 0, 0)",
};

// =============== //
// ↓↓↓ Primary ↓↓↓ //
// =============== //

export const PRIMARY = "#5193F6";
export const PRIMARY_HIGHLIGHT = "#3373D1";

// ================== //
// ↓↓↓ Light Mode ↓↓↓ //
// ================== //

export const LIGHT = {
	one: "#F9F9F9",
	two: "#F8F6FA",
	three: "#F1EEF3",
	four: "#DBD9E0",
	five: "#DADDE9",
	six: "#BCC3D5",
	seven: "#B0B6C9",
	eight: "#74798E",
	nine: "#A9A9A9",
	ten: "#C4C4C4",
};

// ================= //
// ↓↓↓ Dark Mode ↓↓↓ //
// ================= //

export const DARK = {
	one: "#22272C",
	two: "#2A2D32",
	three: "#2E343B",
	four: "#383C40",
	five: "#575A5D",
};

// ============ //
// ↓↓↓ Text ↓↓↓ //
// ============ //

export const TEXT = {
	white: "#F2F2F2",
	black: "#212121",
};

// ============== //
// ↓↓↓ Alerts ↓↓↓ //
// ============== //

export const ALERTS = {
	error: {
		light: "#FF0F00",
		dark: "#FF7C74",
	},
};
