import * as React from "react";

import * as Styled from "./projects.styled";

import polygramBackgroundImage from "@/images/polygram.png";
import pokebloxBackgroundImage from "@/images/pokeblox.png";

export const Projects = () => {
	return (
		<Styled.Projects>
			{/* Polygram */}
			<ProjectItem
				title="Polygram"
				tech="React • Redux • Ruby On Rails • PostgreSQL • jQuery"
				description="Single-page Instagram clone."
				liveLink="https://polygram-lk.herokuapp.com"
				gitHubLink="https://github.com/lk340/Polygram"
				backgroundImage={polygramBackgroundImage}
			/>

			{/* Pokéblox */}
			<ProjectItem
				title="Pokéblox"
				tech="HTML • CSS • JS • Canvas"
				description="Pokémon and Tetris join hands."
				liveLink="https://www.loydkim.com/PokeBlox/"
				gitHubLink="https://github.com/lk340/PokeBlox"
				backgroundImage={pokebloxBackgroundImage}
			/>
		</Styled.Projects>
	);
};

// ==================== //
// ↓↓↓ Project Item ↓↓↓ //
// ==================== //

type ProjectItemProps = {
	title: string;
	tech: string;
	description: string;
	liveLink: string;
	gitHubLink: string;
	backgroundImage: string;
};

const ProjectItem = (props: ProjectItemProps) => {
	return (
		<Styled.ProjectsItem backgroundImage={props.backgroundImage}>
			<Styled.ProjectsItemOverlay />
			<Styled.ProjectsItemModal>
				{/* Title */}
				<Styled.ProjectsItemModalTitle>{props.title}</Styled.ProjectsItemModalTitle>
				{/* Tech */}
				<Styled.ProjectsItemModalTech>{props.tech}</Styled.ProjectsItemModalTech>
				{/* Description */}
				<Styled.ProjectsItemModalDescription>
					{props.description}
				</Styled.ProjectsItemModalDescription>
				{/* Live Link */}
				<Styled.ProjectsItemModalLiveLink href={props.liveLink}>
					Live
				</Styled.ProjectsItemModalLiveLink>
				{/* GitHub Link */}
				<Styled.ProjectsItemModalGitHubLink href={props.gitHubLink}>
					GitHub
				</Styled.ProjectsItemModalGitHubLink>
			</Styled.ProjectsItemModal>
		</Styled.ProjectsItem>
	);
};
