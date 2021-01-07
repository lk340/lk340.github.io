import * as React from "react";
import Typist from "react-typist";
import Particles from "react-particles-js";

import * as Styled from "./home.styled";
import * as Springs from "./home.springs";
import { particlesConfig } from "./particles-config";

export const Home = () => {
	// --- Animations --- //
	const animateParticles = Springs.particles();
	const animateName = Springs.name();
	const animateRole = Springs.role();
	const animateAboutLink = Springs.aboutLink();

	return (
		<Styled.Home>
			<Styled.HomeParticles style={animateParticles}>
				<Particles height="100vh" width="100vw" params={particlesConfig} />
			</Styled.HomeParticles>

			<Styled.HomeContent>
				{/* Name */}
				<Styled.HomeName style={animateName}>LOYD KIM</Styled.HomeName>

				{/* Role */}
				<Styled.HomeRole style={animateRole}>
					<Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}>
						<Typist.Delay ms={1000} />
						Web Developer / Designer
					</Typist>
				</Styled.HomeRole>

				{/* About Link */}
				<Styled.HomeAboutLinkContainer style={animateAboutLink}>
					<Styled.HomeAboutLinkContainerBorderTop />
					<Styled.HomeAboutLinkContainerBorderRight />
					<Styled.HomeAboutLinkContainerBorderBottom />
					<Styled.HomeAboutLinkContainerBorderLeft />

					<Styled.HomeAboutLink to="info">
						{/* Text */}
						<Styled.HomeAboutLinkText>About</Styled.HomeAboutLinkText>
						{/* Arrow */}
						<Styled.HomeAboutLinkArrowContainer>
							<Styled.HomeAboutLinkArrow />
						</Styled.HomeAboutLinkArrowContainer>
					</Styled.HomeAboutLink>
				</Styled.HomeAboutLinkContainer>
			</Styled.HomeContent>
		</Styled.Home>
	);
};
