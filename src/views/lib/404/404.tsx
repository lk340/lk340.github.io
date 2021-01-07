import * as React from "react";

import * as Styled from "./404.styled";

export const NotFound = () => {
	return (
		<Styled.NotFound>
			<Styled.NotFoundHeader>
				Oh, no! The page you're looking for doesn't exist :(
				<br />
				But that's okay because I've got you covered!
			</Styled.NotFoundHeader>
			<Styled.NotFoundBody>
				<Styled.NotFoundBodyText>
					You can find the main info page{" "}
					<Styled.NotFoundBodyLink to="/info">here</Styled.NotFoundBodyLink>
				</Styled.NotFoundBodyText>
			</Styled.NotFoundBody>
		</Styled.NotFound>
	);
};
