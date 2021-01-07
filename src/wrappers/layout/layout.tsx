import * as React from "react";

import { Providers as ContextProvider } from "@/context/providers";
import { Observer } from "../observer/observer";
import * as Styles from "@/utils/styles";

import * as Styled from "./layout.styled";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	React.useEffect(() => Styles.Snippets.checkWebGLAvailable(), []);

	return (
		<ContextProvider>
			{typeof window !== "undefined" ? (
				<Observer>
					<Styled.Layout>
						<Styled.LayoutGlobalStyles />
						<Styled.LayoutChildren>{children}</Styled.LayoutChildren>
					</Styled.Layout>
				</Observer>
			) : (
				""
			)}
		</ContextProvider>
	);
};
