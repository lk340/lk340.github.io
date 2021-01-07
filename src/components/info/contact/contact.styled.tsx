import styled from "styled-components";

import * as Styles from "@/utils/styles";
import * as Icons from "@/icons";

/**
 * Contact
 * Form
 * Contact Button
 */

// =============== //
// ↓↓↓ Contact ↓↓↓ //
// =============== //

export const Contact = styled("section")`
	${Styles.Snippets.grid(1, "auto", 60)};

`;

export const ContactTitle = styled("h1")`
	${Styles.Snippets.clearSpacing()};
	color: ${Styles.Colors.LIGHT.seven};
	font-family: "lora";
	font-size: ${Styles.Constants.fontSizes.components.info.contact.title};

	@media (max-width: 715px) {
		font-size: 1.875rem;
	}

	@media (max-width: ${Styles.Constants.breakpoints.mobileNavbarBreakpoint}px) {
		width: 100%;
	}

	@media (max-width: 374px) {
		font-size: 1.5rem;
	}
`;

// ============ //
// ↓↓↓ Form ↓↓↓ //
// ============ //

export const ContactForm = styled("form").attrs(() => ({
	action: "mailto:loyd.hkim@gmail.com",
	method: "POST",
	enctype: "multipart/form-data",
}))`
	${Styles.Snippets.grid(1, "auto", 40)};
`;

export const ContactFormInputContainer = styled("article")`
	${Styles.Snippets.grid(2, "auto", 40)};
`;

export const ContactFormGroup = styled("div")`
	${Styles.Snippets.flex("column")};
`;

export const ContactFormGroupTitle = styled("h3")`
	${Styles.Snippets.clearSpacing()};
	margin-bottom: 10px;
	color: ${Styles.Colors.LIGHT.seven};
	font-size: ${Styles.Constants.fontSizes.components.info.contact.formTitle};
	font-weight: 500;
	letter-spacing: 0.2rem;
`;

type InputProps = { type: "email" | "text" };

export const ContactFormGroupInput = styled("input").attrs((props: InputProps) => ({
	type: props.type,
	required: true,
}))`
	${Styles.Snippets.size("300px", "50px")};
	border: none;
	border-bottom: ${Styles.Colors.LIGHT.seven} solid 1px;
	font-size: ${Styles.Constants.fontSizes.components.info.contact.formInput};
	outline: none;
`;

export const ContactMessageTitle = styled(ContactFormGroupTitle)`
	margin-bottom: 20px;
`;

export const ContactMessageTextArea = styled("textarea").attrs(() => ({
	placeholder: "Send me a message! I'd love to connect :)",
	required: true,
}))`
	height: 300px;
	padding: 20px;
	font-size: ${Styles.Constants.fontSizes.components.info.contact.messageTextarea};
	border: ${Styles.Colors.LIGHT.seven} solid 1px;
	line-height: ${Styles.Constants.lineHeights.body};
	outline: none;

	::placeholder {
		color: ${Styles.Colors.LIGHT.eight};
	}
`;

// ====================== //
// ↓↓↓ Contact Button ↓↓↓ //
// ====================== //

export const ContactButton = styled("button").attrs(() => ({
	type: "submit",
}))`
	${Styles.Snippets.flexRowCenter()};
	${Styles.Snippets.removeAutoContainerWidthFill()};
	padding: ${Styles.Constants.paddings.pages.home.aboutLink};
	background-color: ${Styles.Colors.PRIMARY};
	border: none;
	border-radius: none;
	transition: 0.1s ease-in-out;
	cursor: pointer;

	:hover {
		background-color: ${(props) => {
			return props.theme.isMobile
				? Styles.Colors.PRIMARY
				: Styles.Colors.PRIMARY_HIGHLIGHT;
		}};
	}

	:hover #contact-send-button-arrow-container {
		transform: ${(props) => {
			return props.theme.isMobile ? "translateX(0rem)" : "translateX(0.2rem)";
		}};
	}

	@media (max-width: ${Styles.Constants.breakpoints.mobileNavbarBreakpoint}px) {
		${Styles.Snippets.size("100%", "60px")};
	}
`;

export const ContactButtonText = styled("span")`
	display: block;
	margin-right: 10px;
	color: ${Styles.Colors.NEUTRALS.white_100};
	font-size: ${Styles.Constants.fontSizes.components.info.contact.sendButtonText};
	font-weight: 500;
`;

export const ContactButtonArrowContainer = styled("div").attrs(() => ({
	id: "contact-send-button-arrow-container",
}))`
	${Styles.Snippets.flexRowCenter()};
	transition: 0.2s ease-out;
`;

export const ContactButtonArrow = styled(Icons.ArrowRight).attrs(() => ({
	height: 12,
	fill: Styles.Colors.NEUTRALS.white_100,
}))``;
