import * as React from "react";

import * as Styled from "./loading.styled";
import * as Springs from "./loading.springs";

export const Loading = () => {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(function (): void {
			setLoading(false);
		}, 2400);
	}, []);

	// --- Animations --- //
	const animateLoading = Springs.loading(loading);
	const animateAnimationBar = Springs.animationBar();

	return (
		<>
			{animateLoading.map(
				({ item, key, props }) =>
					item && (
						<Styled.Loading key={key} style={props}>
							<Styled.LoadingContainer>
								{/* Text */}
								<Styled.LoadingText>Hang tight. We're goin' in!</Styled.LoadingText>

								{/* Bar */}
								<Styled.LoadingAnimation>
									<Styled.LoadingAnimationBar style={animateAnimationBar} />
								</Styled.LoadingAnimation>
							</Styled.LoadingContainer>
						</Styled.Loading>
					),
			)}
		</>
	);
};
