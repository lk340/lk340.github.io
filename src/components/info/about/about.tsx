import * as React from "react";

import * as Styled from "./about.styled";

export const About = () => {
	return (
		<Styled.About>
			{/* Name */}
			<Styled.AboutName>Loyd Kim</Styled.AboutName>

			{/* Role */}
			<Styled.AboutRole>Software Engineer</Styled.AboutRole>

			{/* Description */}
			<Styled.AboutDescription>
				I am a full-stack web developer based in the United States. I am passionate about
				learning new technologies and pursuing challenges that force me to think
				creatively and outside the box. While I have experience in full-stack work and
				enjoy doing it, my current obsession is with the front end and utilizing UI/UX
				design to create memorable experiences.
				<br />
				<br />
				During my free time, I like to listen to podcasts, watch anime, and help my mom
				around the house.
			</Styled.AboutDescription>

			{/* Resume Button */}
			<Styled.AboutResumeButton>
				<Styled.AboutResumeButtonText>Resume</Styled.AboutResumeButtonText>
				<Styled.AboutResumeButtonArrowContainer>
					<Styled.AboutResumeButtonArrow />
				</Styled.AboutResumeButtonArrowContainer>
			</Styled.AboutResumeButton>
		</Styled.About>
	);
};
