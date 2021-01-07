import * as React from "react";

import * as Types from "@/utils/types";

import * as Styled from "./contact.styled";

export const Contact = () => {
	const [active, setActive] = React.useState<"" | "Email" | "Subject" | "Message">("");
	const [email, setEmail] = React.useState("");
	const [subject, setSubject] = React.useState("");
	const [message, setMessage] = React.useState("");

	function handleInputChange(type: "email" | "subject", event: Types.Input) {
		if (type === "email") setEmail(event.currentTarget.value);
		else setSubject(event.currentTarget.value);
	}

	function handleTextareaChange(event: Types.Textarea) {
		setMessage(event.currentTarget.value);
	}

	function handleSubmit(event: Types.Submit) {
		event.preventDefault();
		console.log("Email:", email);
		console.log("Subject:", subject);
		console.log("Message:", message);
		console.log("Submitted!");
	}

	return (
		<Styled.Contact>
			{/* Title */}
			<Styled.ContactTitle>loyd.hkim@gmail.com</Styled.ContactTitle>

			{/* Form */}
			{/* <Styled.ContactForm> */}
				{/* Inputs */}
				{/* <Styled.ContactFormInputContainer> */}
				{/* Email */}
				{/* <ContactFormGroup
						title="EMAIL"
						inputType="email"
						handleChange={handleInputChange}
					/> */} 
				{/* Subject */}
				{/* <ContactFormGroup
						title="SUBJECT"
						inputType="text"
						handleChange={handleInputChange}
					/> */}
				{/* </Styled.ContactFormInputContainer> */}

				{/* Message Textarea */}
				{/* <Styled.ContactFormGroup>
					<Styled.ContactMessageTitle>MESSAGE</Styled.ContactMessageTitle>
					<Styled.ContactMessageTextArea onChange={handleTextareaChange} />
				</Styled.ContactFormGroup> */}

				{/* Contact Button */}
				<Styled.ContactButton>
					{/* Text */}
					<Styled.ContactButtonText>Contact</Styled.ContactButtonText>
					{/* Arrow */}
					<Styled.ContactButtonArrowContainer>
						<Styled.ContactButtonArrow />
					</Styled.ContactButtonArrowContainer>
				</Styled.ContactButton>
			{/* </Styled.ContactForm> */}
		</Styled.Contact>
	);
};

// ===================== //
// ↓↓↓ Contact Group ↓↓↓ //
// ===================== //

type ContactFormGroupProps = {
	title: string;
	inputType: "email" | "text";
	handleChange: Function;
};

const ContactFormGroup = (props: ContactFormGroupProps) => {
	return (
		<Styled.ContactFormGroup>
			<Styled.ContactFormGroupTitle>{props.title}</Styled.ContactFormGroupTitle>
			<Styled.ContactFormGroupInput
				type={props.inputType}
				onChange={(event: Types.Input) => props.handleChange(props.inputType, event)}
			/>
		</Styled.ContactFormGroup>
	);
};
