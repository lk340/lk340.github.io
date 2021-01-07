import * as React from "react";

import * as Helpers from "@/context/helpers";

type State = {
	loading: boolean;
};

const initialState = Object.freeze<State>({
	loading: true,
});

export const useLoadingContext = Helpers.createUseContext(() => {
	const [loading, _setLoading] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	function setLoading(state: Partial<State>): void {
		_setLoading({ ...loading, ...state });
	}

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = loading;

	const setters = {
		setLoading,
	};

	return {
		loading: { state, setters },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useLoadingContext.Provider>{children}</useLoadingContext.Provider>;
};
