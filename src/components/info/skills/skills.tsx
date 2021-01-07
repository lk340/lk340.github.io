import * as React from "react";

import * as Context from "@/context";
import * as Styled from "./skills.styled";

import { Dropdown } from "./dropdown";
import * as SkillsList from "./skills-list";

export const Skills = () => {
	const { skills } = Context.Skills.useSkillsContext();

	React.useEffect(() => {
		return function cleanup() {
			skills.setters.resetDropdown();
		};
	}, []);

	return (
		<Styled.Skills>
			<Dropdown title="Front End" skills={SkillsList.frontEndSkills} />
			<Dropdown title="Back End" skills={SkillsList.backEndSkills} />
			<Dropdown title="Testing" skills={SkillsList.testingSkills} />
			<Dropdown title="Design" skills={SkillsList.designSkills} />
		</Styled.Skills>
	);
};
