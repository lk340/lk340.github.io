import * as React from "react";

import * as Context from "@/context";
import * as Components from "@/components";

import * as Styled from "./info.styled";
import { Sidebar } from "./sidebar";

export const Info = () => {
	const { info } = Context.Info.useInfoContext();

	return (
		<Styled.Info>
			<Components.Loading />
			<Components.MobileNavbar />
			<Components.MobileNavbarMenu />

			<Sidebar />

			<Styled.InfoMain>
				{/* About */}
				<Components.InfoTransition isSelected={info.state.page === "About"}>
					<Components.About />
				</Components.InfoTransition>

				{/* Skills */}
				<Components.InfoTransition isSelected={info.state.page === "Skills"}>
					<Components.Skills />
				</Components.InfoTransition>

				{/* Projects */}
				<Components.InfoTransition isSelected={info.state.page === "Projects"}>
					<Components.Projects />
				</Components.InfoTransition>

				{/* Get In Touch */}
				<Components.InfoTransition isSelected={info.state.page === "Contact"}>
					<Components.Contact />
				</Components.InfoTransition>
			</Styled.InfoMain>

			<Styled.InfoSidebarDummy />
		</Styled.Info>
	);
};
