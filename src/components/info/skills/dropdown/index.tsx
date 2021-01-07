import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./dropdown.styled";
import * as Springs from "./dropdown.springs";

import { Skill } from "../skills-list";

type Props = {
	title: Context.Skills.Dropdown;
	skills: Skill[];
};

export const Dropdown = (props: Props) => {
	const { skills } = Context.Skills.useSkillsContext();

	const _isSelected = skills.getters.getDropdown(props.title);

	// --- Animations --- //
	const animateDropdown = Springs.dropdown(_isSelected);
	const animateHeader = Springs.header(_isSelected);
	const animateTitle = Springs.title(_isSelected);
	const animateArrowContainer = Springs.arrowContainer(_isSelected);
	const animateItems = Springs.items(_isSelected);

	// --- Skill Items List --- //
	const itemsText = props.skills.map((skill: Skill) => {
		return (
			<React.Fragment key={skill.key}>
				<Styled.DropdownItemsText>{skill.text}</Styled.DropdownItemsText>
			</React.Fragment>
		);
	});

	return (
		<Styled.Dropdown style={animateDropdown} is_selected={_isSelected.toString()}>
			{/* Header */}
			<Styled.DropdownHeader
				onClick={() => skills.setters.toggleDropdown(props.title)}
				style={animateHeader}
			>
				{/* Title */}
				<Styled.DropdownTitle style={animateTitle}>{props.title}</Styled.DropdownTitle>
				{/* Arrow */}
				<Styled.DropdownArrowContainer style={animateArrowContainer}>
					<Styled.DropdownArrow isSelected={_isSelected} />
				</Styled.DropdownArrowContainer>
			</Styled.DropdownHeader>

			{/* Items */}
			<Styled.DropdownItems style={animateItems}>{itemsText}</Styled.DropdownItems>
		</Styled.Dropdown>
	);
};
