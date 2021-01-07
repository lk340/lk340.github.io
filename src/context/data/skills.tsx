import * as React from "react";

import * as Helpers from "@/context/helpers";

export type Dropdown = "Front End" | "Back End" | "Testing" | "Design";

type State = {
	frontEndOpen: boolean;
	backEndOpen: boolean;
	testingOpen: boolean;
	designOpen: boolean;
};

const initialState = Object.freeze<State>({
	frontEndOpen: false,
	backEndOpen: false,
	testingOpen: false,
	designOpen: false,
});

export const useSkillsContext = Helpers.createUseContext(() => {
	const [skills, _setSkills] = React.useState<State>({ ...initialState });

	// =============== //
	// ↓↓↓ Getters ↓↓↓ //
	// =============== //

	function getDropdown(dropdown: Dropdown): boolean {
		if (dropdown === "Front End") return skills.frontEndOpen;
		else if (dropdown === "Back End") return skills.backEndOpen;
		else if (dropdown === "Testing") return skills.testingOpen;
		else return skills.designOpen;
	}

	// =============== //
	// ↓↓↓ Setters ↓↓↓ //
	// =============== //

	function setSkills(state: Partial<State>): void {
		_setSkills({ ...skills, ...state });
	}

	function toggleDropdown(dropdown: Dropdown): void {
		if (dropdown === "Front End") {
			setSkills({
				frontEndOpen: !skills.frontEndOpen,
				backEndOpen: false,
				testingOpen: false,
				designOpen: false,
			});
		} else if (dropdown === "Back End") {
			setSkills({
				frontEndOpen: false,
				backEndOpen: !skills.backEndOpen,
				testingOpen: false,
				designOpen: false,
			});
		} else if (dropdown === "Testing") {
			setSkills({
				frontEndOpen: false,
				backEndOpen: false,
				testingOpen: !skills.testingOpen,
				designOpen: false,
			});
		} else {
			setSkills({
				frontEndOpen: false,
				backEndOpen: false,
				testingOpen: false,
				designOpen: !skills.designOpen,
			});
		}
	}

	function resetDropdown(): void {
		setSkills({
			frontEndOpen: false,
			backEndOpen: false,
			testingOpen: false,
			designOpen: false,
		});
	}

	// =============== //
	// ↓↓↓ Exports ↓↓↓ //
	// =============== //

	const state = skills;

	const getters = {
		getDropdown,
	};

	const setters = {
		setSkills,
		toggleDropdown,
		resetDropdown,
	};

	return {
		skills: { state, getters, setters },
	};
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <useSkillsContext.Provider>{children}</useSkillsContext.Provider>;
};
