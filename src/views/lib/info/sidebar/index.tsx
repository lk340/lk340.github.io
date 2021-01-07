import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./sidebar.styled";
import * as Springs from "./sidebar.springs";

export const Sidebar = () => {
	return (
		<Styled.Sidebar>
			{/* Logo Link */}
			<Styled.SidebarLogoLinkContainer>
				<Styled.SidebarLogoLink>
					<Styled.SidebarLogo />
				</Styled.SidebarLogoLink>
			</Styled.SidebarLogoLinkContainer>

			{/* Pagination */}
			<Styled.SidebarPagination>
				<PaginationGroup setPage="About" text="About" />
				<PaginationGroup setPage="Skills" text="Skills" />
				<PaginationGroup setPage="Projects" text="Projects" />
				<PaginationGroup setPage="Contact" text="Contact" />
			</Styled.SidebarPagination>

			{/* Socials */}
			<Styled.SidebarSocials>
				<SocialsLink type="github" href="https://github.com/lk340/" />
				<SocialsLink type="linked in" href="https://www.linkedin.com/in/loydkim/" />
				<SocialsLink type="angel list" href="https://angel.co/u/lk340/" />
			</Styled.SidebarSocials>
		</Styled.Sidebar>
	);
};

// ======================== //
// ↓↓↓ Pagination Group ↓↓↓ //
// ======================== //

type PaginationGroupProps = {
	setPage: Context.Info.Page;
	text: Context.Info.Page;
};

export const PaginationGroup = (props: PaginationGroupProps) => {
	const { info } = Context.Info.useInfoContext();

	// --- Animations --- //
	const animateLinkLine = Springs.linkLine(info.state.page === props.setPage);
	const animateLinkText = Springs.linkText(info.state.page === props.setPage);

	return (
		<Styled.SidebarPaginationLinkContainer>
			{/* Line (on click, sets the page) */}
			<Styled.SidebarPaginationLinkLineContainer>
				<Styled.SidebarPaginationLinkLine
					onClick={() => info.setters.setPage(props.setPage)}
					set_page={props.setPage}
					page={info.state.page}
					style={animateLinkLine}
				/>
			</Styled.SidebarPaginationLinkLineContainer>

			{/* Text (tells user what page they're on) */}
			<Styled.SidebarPaginationLinkText style={animateLinkText}>
				{props.text}
			</Styled.SidebarPaginationLinkText>
		</Styled.SidebarPaginationLinkContainer>
	);
};

// ==================== //
// ↓↓↓ Socials Link ↓↓↓ //
// ==================== //

type SocialsLinkProps = {
	href: string;
	type: "github" | "linked in" | "angel list";
};

const SocialsLink = (props: SocialsLinkProps) => {
	// --- Setting proper social icon --- //
	let socialIcon: React.ReactNode;
	switch (props.type) {
		case "github":
			socialIcon = <Styled.SidebarSocialsGitHub />;
			break;
		case "linked in":
			socialIcon = <Styled.SidebarSocialsLinkedIn />;
			break;
		default:
			socialIcon = <Styled.SidebarSocialsAngelList />;
			break;
	}

	return (
		<Styled.SidebarSocialsLink href={props.href}>{socialIcon}</Styled.SidebarSocialsLink>
	);
};
