import * as React from "react";

import * as Helpers from "@/context/helpers";

export type Page = "About" | "Skills" | "Projects" | "Contact";

type State = {
	page: Page;
	scrollIndex: number;
	menuOpen: boolean;
};

const initialState = Object.freeze<State>({
	page: "About",
	scrollIndex: 0,
	menuOpen: false,
});

export const useInfoContext = Helpers.createUseContext(() => {
	const [info, _setInfo] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	function setInfo(state: Partial<State>): void {
		_setInfo({ ...info, ...state });
	}

	function setPage(page: Page): void {
		setInfo({ page });
	}

	const pages: ["About", "Skills", "Projects", "Contact"] = [
		"About",
		"Skills",
		"Projects",
		"Contact",
	];

	function incrementScrollIndex(): void {
		if (info.scrollIndex + 1 < 4) {
			setInfo({ scrollIndex: info.scrollIndex + 1 });
		}
		setInfo({ page: pages[info.scrollIndex] });
	}

	function decrementScrollIndex(): void {
		if (info.scrollIndex - 1 > -1) {
			setInfo({ scrollIndex: info.scrollIndex - 1 });
		}
		setInfo({ page: pages[info.scrollIndex] });
	}

	function toggleMenu(): void {
		setInfo({ menuOpen: !info.menuOpen });
	}

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = info;

	const setters = {
		setInfo,
		setPage,
		incrementScrollIndex,
		decrementScrollIndex,
		toggleMenu,
	};

	return {
		info: { state, setters },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useInfoContext.Provider>{children}</useInfoContext.Provider>;
};
