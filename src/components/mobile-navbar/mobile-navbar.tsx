import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./mobile-navbar.styled";
import * as Springs from "./mobile-navbar.springs";

export const MobileNavbar = () => {
	const { info } = Context.Info.useInfoContext();

	return (
		<Styled.MobileNavbar>
			<Link
				type="About"
				text="About"
				isSelected={info.state.page === "About"}
				setPageTo="About"
			/>
			<Link
				type="Skills"
				text="Skills"
				isSelected={info.state.page === "Skills"}
				setPageTo="Skills"
			/>
			<Link
				type="Projects"
				text="Projects"
				isSelected={info.state.page === "Projects"}
				setPageTo="Projects"
			/>
			<Link
				type="Contact"
				text="Contact"
				isSelected={info.state.page === "Contact"}
				setPageTo="Contact"
			/>
			<Link type="Menu" text="Menu" />
		</Styled.MobileNavbar>
	);
};

// ============ //
// ↓↓↓ Link ↓↓↓ //
// ============ //

type InfoPageMobile = Context.Info.Page | "Menu";

type LinkProps = {
	type: InfoPageMobile;
	text: InfoPageMobile;
	isSelected?: boolean;
	setPageTo?: Context.Info.Page;
};

const Link = (props: LinkProps) => {
	const { info } = Context.Info.useInfoContext();

	// --- Animation --- //
	const _isMenu = props.type === "Menu";
	const animateText = Springs.text(_isMenu, props.isSelected || false);

	// --- Setting The Link Icon --- //
	let linkIcon;
	if (props.type === "About") {
		linkIcon = <Styled.MobileNavbarLinkIconAbout isSelected={props.isSelected} />;
	} else if (props.type === "Skills") {
		linkIcon = <Styled.MobileNavbarLinkIconSkills isSelected={props.isSelected} />;
	} else if (props.type === "Projects") {
		linkIcon = <Styled.MobileNavbarLinkIconProjects isSelected={props.isSelected} />;
	} else if (props.type === "Contact") {
		linkIcon = <Styled.MobileNavbarLinkIconContact isSelected={props.isSelected} />;
	} else {
		linkIcon = <Styled.MobileNavbarLinkIconMenu />;
	}

	// --- Navbar Handler --- //
	function navbarHandler() {
		if (props.type !== "Menu") return info.setters.setPage(props.setPageTo || "About");
		else return info.setters.toggleMenu();
	}

	return (
		<Styled.MobileNavbarLink onClick={navbarHandler}>
			{linkIcon}
			<Styled.MobileNavbarLinkText style={animateText}>
				{props.text}
			</Styled.MobileNavbarLinkText>
		</Styled.MobileNavbarLink>
	);
};
