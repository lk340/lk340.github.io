import * as React from "react";

import * as Context from "@/context";
import * as Icons from "@/icons";

import * as Styled from "./mobile-navbar-menu.styled";
import * as Springs from "./mobile-navbar-menu.springs";

export const MobileNavbarMenu = () => {
	const { info } = Context.Info.useInfoContext();

	const animateMenu = Springs.menu(info.state.menuOpen);
	const animateContainer = Springs.container(info.state.menuOpen);
	const animateCloseContainer = Springs.content(info.state.menuOpen);

	return (
		<Styled.MobileNavbarMenu style={animateMenu}>
			<Styled.MobileNavbarMenuContainer style={animateContainer}>
				{/* Contents */}
				<Styled.MobileNavbarMenuContainerContents>
					{/* GitHub */}
					<ContentLink
						type="github"
						href="https://github.com/lk340/"
						text="GitHub"
						isMargin={true}
					/>

					{/* LinkedIn */}
					<ContentLink
						type="linked in"
						href="https://www.linkedin.com/in/loydkim/"
						text="LinkedIn"
						isMargin={true}
					/>

					{/* Angel List */}
					<ContentLink
						type="angel list"
						href="https://angel.co/u/lk340/"
						text="Angel List"
						isMargin={false}
					/>
				</Styled.MobileNavbarMenuContainerContents>

				{/* Close Button */}
				<Styled.MobileNavbarMenuContainerCloseContainer style={animateCloseContainer}>
					<Styled.MobileNavbarMenuContainerCloseButton onClick={info.setters.toggleMenu}>
						Close
					</Styled.MobileNavbarMenuContainerCloseButton>
				</Styled.MobileNavbarMenuContainerCloseContainer>
			</Styled.MobileNavbarMenuContainer>
		</Styled.MobileNavbarMenu>
	);
};

// ==================== //
// ↓↓↓ Content Link ↓↓↓ //
// ==================== //

type ContentLinkProps = {
	type: "github" | "linked in" | "angel list";
	href: string;
	text: string;
	isMargin: boolean;
};

const ContentLink = (props: ContentLinkProps) => {
	const { info } = Context.Info.useInfoContext();

	// --- Setting proper social icon --- //
	let socialIcon;
	switch (props.type) {
		case "github":
			socialIcon = <Icons.GitHub height={22} />;
			break;
		case "linked in":
			socialIcon = <Icons.LinkedIn height={22} />;
			break;
		default:
			socialIcon = <Icons.AngelList height={22} />;
			break;
	}

	// --- Animations --- //
	const animateLinkContainer = Springs.content(info.state.menuOpen);

	return (
		<Styled.MobileNavbarMenuContainerContentsLinkContainer style={animateLinkContainer}>
			<Styled.MobileNavbarMenuContainerContentsLink
				href={props.href}
				is_margin={props.isMargin.toString()}
			>
				{/* Social Icon */}
				<Styled.MobileNavbarMenuContainerContentsLinkIcon>
					{socialIcon}
				</Styled.MobileNavbarMenuContainerContentsLinkIcon>
				{/* Text */}
				<Styled.MobileNavbarMenuContainerContentsLinkText>
					{props.text}
				</Styled.MobileNavbarMenuContainerContentsLinkText>
			</Styled.MobileNavbarMenuContainerContentsLink>
		</Styled.MobileNavbarMenuContainerContentsLinkContainer>
	);
};
