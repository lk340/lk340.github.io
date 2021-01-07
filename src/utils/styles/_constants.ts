import * as Colors from "./_colors";
import * as Shadows from "./_shadows";

/**
 * Globals
 * Theme Colors
 * Breakpoints
 * Side Paddings
 * Size
 * Font Sizes
 * Line Heights
 * Border Radius
 */

export const threeJS = {
	fieldOfView: 75,
	near: 0.1,
	far: 1000,
};

// ============== //
// ↓↓↓ Globals ↓↓↓ //
// ============== //

export const globals = {
	maxWidth: 1200,
};

// ==================== //
// ↓↓↓ Theme Colors ↓↓↓ //
// ==================== //

export const themes = {
	background: { light: Colors.NEUTRALS.white_100, dark: Colors.DARK.one },
	text: { light: Colors.TEXT.black, dark: Colors.TEXT.white },
	shadowOne: { light: Shadows.light.one, dark: Shadows.dark.one },
	shadowTwo: { light: Shadows.light.two, dark: Shadows.dark.two },
	shadowThree: { light: Shadows.light.three, dark: Shadows.dark.three },
	components: {},
	pages: {
		home: { background: { light: Colors.LIGHT.one, dark: Colors.DARK.two } },
	},
};

// =================== //
// ↓↓↓ Breakpoints ↓↓↓ //
// =================== //

export const breakpoints = {
	tablet: 1102,
	mobile: 450,
	paddingTablet: 865,
	paddingMobile: 450,
	mobileNavbarBreakpoint: 600,
	navbar: {
		1260: 1260,
		650: 650,
	},
	home: {
		1260: 1260,
		650: 650,
	},
};

// ==================== //
// ↓↓↓ Side Paddings ↓↓↓ //
// ==================== //

export const paddings = {
	responsive: {
		desktop: 120,
		tablet: 60,
		mobile: 30,
	},
	components: {},
	pages: {
		home: { aboutLink: "10px 18px" },
		info: { sidebar: 40 },
	},
};

// ============ //
// ↓↓↓ Size ↓↓↓ //
// ============ //

export const sizes = {
	components: {
		info: {
			skills: {
				dropdown: {
					width: 600,
				},
			},
		},
		mobileNavbar: { height: 70 },
		mobileNavbarMenu: { button: { height: 60 } },
	},
	pages: {
		info: {
			sidebar: {
				maxWidth: 180,
				paginationLink: {
					width: {
						selected: 30,
						notSelected: 25,
					},
					height: 6,
				},
				socialsIcon: { height: 16 },
			},
			projects: {
				item: { width: 400, height: 300 },
			},
		},
	},
};

// ================== //
// ↓↓↓ Font Sizes ↓↓↓ //
// ================== //

export const fontSizes = {
	fallback: "1rem",
	components: {
		info: {
			about: {
				name: "4.375rem",
				role: "1.25rem",
				description: "0.875rem",
				resumeButton: "0.875rem",
				scroll: "0.75rem",
			},
			skills: {
				title: "1rem",
				itemText: "0.875rem",
			},
			contact: {
				title: "2.5rem",
				formTitle: "0.875rem",
				formInput: "1.5rem",
				messageTextarea: "1rem",
				sendButtonText: "0.875rem",
			},
		},
		mobileNavbar: {
			link: "0.625rem",
		},
		mobileNavbarMenu: "1rem",
	},
	pages: {
		info: { sidebar: { paginationLinkText: "0.75rem" } },
		notFound: {
			title: "2.5rem",
			body: "1.5rem",
		},
	},
};

// ============= //
// ↓↓↓ Fonts ↓↓↓ //
// ============= //

export const fonts = {
	primary: "lora",
	secondary: "quicksand",
	other: "roboto regular",
};

// ==================== //
// ↓↓↓ Line Heights ↓↓↓ //
// ==================== //

export const lineHeights = {
	body: "170%",
	components: {},
	pages: {},
};

// ===================== //
// ↓↓↓ Border Radius ↓↓↓ //
// ===================== //

export const borderRadius = {
	components: {},
	pages: {},
};
